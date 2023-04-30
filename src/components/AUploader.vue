<template>
  <div
    class="uploader"
    :class="{ 'uploader_is-hovered-by-dragging': isHoveredByDragging, 'uploader_disabled': disabled }"
    @dragenter="onDragenter"
    @dragleave="onDragleave"
  >
    <input
      class="uploader__file"
      type="file"
      :accept="accept"
      :title="fileNames"
      :multiple="isMultiple"
      :disabled="disabled"
      @input="onInput"
    >

    <component :is="iconComponent" class="uploader__icon" />

    <p class="uploader__text">
      <template v-if="fileNames">
        {{ fileNames }}
      </template>
      <slot v-else>
        Drop your file{{ isMultiple ? 's' : '' }} here
        or <span class="uploader__text-highlighter">click to upload</span>
      </slot>
    </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import FileUploadOutline from '@/assets/file-upload-outline.svg';
import FileOutline from '@/assets/file-outline.svg';
import { isFileTypeCompatible } from '@/utils/is-file-type-compatible';

interface Data {
  isHoveredByDragging: boolean;
}

export default Vue.extend({
  name: 'AUploader',
  components: {
    FileUploadOutline,
    FileOutline,
  },
  props: {
    value: { type: [File, Array] as PropType<File | File[] | null>, default: null },
    accept: { type: String, default: '' },
    disabled: Boolean,
  },
  data(): Data {
    return {
      isHoveredByDragging: false,
    };
  },
  computed: {
    isMultiple(): boolean {
      return Array.isArray(this.value);
    },
    fileNames(): string {
      return this.isMultiple
        ? (this.value as File[]).reduce(
          (acc, file, index, arr) => `${acc}${file.name}${index === arr.length - 1 ? '' : ', '}`,
          '',
        )
        : (this.value as File | null)?.name ?? '';
    },
    iconComponent(): typeof FileOutline | typeof FileUploadOutline {
      return this.fileNames ? FileOutline : FileUploadOutline;
    },
  },
  methods: {
    onDragenter(evt: DragEvent): void {
      if (evt.dataTransfer?.types.every((type) => type === 'Files')) {
        this.isHoveredByDragging = true;
      }
    },
    onDragleave(evt: DragEvent): void {
      if (!this.$el.contains(evt.relatedTarget as Node)) {
        this.isHoveredByDragging = false;
      }
    },
    onInput(evt: InputEvent): void {
      this.isHoveredByDragging = false;

      const files = (evt.target as HTMLInputElement | null)?.files;

      if (!files?.length) {
        this.$emit('input', this.isMultiple ? [] : null);
        return;
      }

      const compatibleFiles = Array.from(files).filter((file) => isFileTypeCompatible(file, this.accept));

      if (compatibleFiles.length) {
        this.$emit('input', this.isMultiple ? compatibleFiles : compatibleFiles[0]);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars';

.uploader {
  &,
  &__file {
    border-radius: 6px;
  }

  border: 1px dashed $grey;
  padding: 46px 20px;
  max-width: 360px;
  height: 180px;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition-property: border-color, background-color, opacity;
  transition-duration: 0.2s;

  &_disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover,
  &:focus-within,
  &_is-hovered-by-dragging {
    border-color: $secondary;
    background-color: rgba($secondary-lightest, 0.1);
  }

  &__file {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    z-index: 1;
    opacity: 0;
    cursor: pointer;

    &::file-selector-button {
      pointer-events: none;
    }
  }

  &__icon {
    margin-bottom: 12px;
    width: 46px;
    fill: $mono;
  }

  &__text {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &-highlighter {
      color: $secondary;
    }
  }
}
</style>
