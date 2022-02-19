<template>
  <!-- 选择图片 -->
  <section class="section">
    <div class="user-avatar">
      <el-upload
        class="up-load"
        ref="uploadInput"
        type="file"
        name="measuredDataFile"
        accept="image/jpg, image/jpeg, image/png, image/gif"
        :action="actionUrl"
        :data="extraParams"
        :headers="headers"
        :multiple="false"
        :show-file-list="false"
        :auto-upload="false"
        :on-change="selectFile"
        :http-request="httpRequest"
      >
        <template #trigger>
          <el-avatar
            :size="120"
            :src="avatarImg ? avatarImg : defaultAvatarImg"
          ></el-avatar>
          <span class="info-edit">
            <i class="el-icon-camera-solid"></i>
          </span>
        </template>
        <el-button style="display: none"></el-button>
      </el-upload>
    </div>
  </section>
  <!-- 选择图片 -->

  <el-dialog v-model="isShowDialog" title="图片裁切" width="500px">
    <template #footer>
      <el-button @click="isShowDialog = false">取消</el-button>
      <el-button @click="clear">清除</el-button>
      <el-button @click="reset">重置</el-button>
      <el-button type="primary" @click="getResult">裁切</el-button>
    </template>

    <VuePictureCropper
      :boxStyle="{
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
        margin: 'auto'
      }"
      :img="cropperImg"
      :options="{
        viewMode: 1,
        dragMode: 'crop',
        aspectRatio: 1,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'medium'
      }"
      :presetMode="{
        mode: 'round',
        width: 120,
        height: 120
      }"
    />
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { useStore } from '@/store'
import VuePictureCropper, { cropper } from 'vue-picture-cropper'
import cache from '@/utils/cache'
import { ElUpload } from 'element-plus'
import { ElMessage } from 'element-plus'

import {
  actionUrl,
  defaultAvatarImg,
  extraParams,
  headers
} from '../config/avatar-config'
interface Result {
  dataURL: string
  blobURL: string
  cropFile: any
}
export default defineComponent({
  components: {
    VuePictureCropper
  },
  setup() {
    const store = useStore()
    const uploadInput = ref<InstanceType<typeof ElUpload> | null>(null)
    const avatarImg = computed(() => cache.getCache('userInfo').avatarUrl)
    const cropperImg = ref<string>('')
    const result: Result = reactive({
      dataURL: '',
      blobURL: '',
      cropFile: ''
    })
    const isShowDialog = ref<boolean>(false)

    const selectFile = (file: any): void => {
      result.dataURL = ''
      result.blobURL = ''

      if (!file) return
      const reader: FileReader = new FileReader()
      reader.readAsDataURL(file.raw)
      reader.onload = (): void => {
        // 更新裁切弹窗的图片源
        cropperImg.value = String(reader.result)
        isShowDialog.value = true
        uploadInput?.value?.clearFiles()
      }
    }

    const getResult = async (): Promise<void> => {
      // const base64: string = cropper.getDataURL()
      const blob: Blob = await cropper.getBlob()
      result.cropFile = await cropper.getFile()

      let isLt2M =
        result.cropFile.size > 1024 * 1024 * 5 && blob.size > 1024 * 1024 * 5
      if (isLt2M) {
        ElMessage.error('裁剪后的图片不能大于5M')
        return
      }
      // result.dataURL = base64
      try {
        result.blobURL = URL.createObjectURL(blob)
      } catch (e) {
        result.blobURL = ''
      }
      // avatarImg.value = result.blobURL

      uploadInput?.value?.submit()
    }
    const clear = (): void => {
      cropper.clear()
    }
    const reset = (): void => {
      cropper.reset()
    }
    const httpRequest = (request: any) => {
      const { action, data, filename } = request
      let formData = new FormData()
      for (let key in data) {
        formData.append(key, data[key])
      }
      formData.append(filename, result.cropFile)
      // console.log(formData.get(filename))
      store.dispatch('account/changeAvatarAction', {
        url: action,
        formData: formData
      })
      isShowDialog.value = false
    }

    return {
      // 数据
      cropperImg,
      defaultAvatarImg,
      extraParams,
      headers,
      avatarImg,
      actionUrl,
      uploadInput,
      result,
      isShowDialog,
      // 方法
      httpRequest,
      selectFile,
      getResult,
      clear,
      reset
    }
  }
})
</script>

<style scoped lang="less">
.user-avatar {
  display: flex;
  .up-load {
    position: relative;
    height: 120px;
    .info-edit {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      top: 0;
      width: 120px;
      height: 120px;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 50%;
      i {
        color: #eee;
        font-size: 25px;
      }
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
}
</style>
