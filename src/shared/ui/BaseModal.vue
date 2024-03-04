<script setup lang="ts">
import { ref } from 'vue'
const dialog = ref<HTMLDialogElement>()

const open = () => {
  if (dialog.value) dialog.value.showModal()
}
const close = () => {
  if (dialog.value) dialog.value.close()
}

defineExpose({ open, close })
</script>
<template>
  <dialog ref="dialog" class="bg-gray-700 w-full h-full mx-auto">
    <header>
      <button class="fixed top-4 right-4 z-10" @click="close">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </header>
    <slot></slot>
  </dialog>
</template>

<style>
dialog:not([open]) {
  pointer-events: none;
  opacity: 0;
}

dialog {
  max-block-size: min(98vh, 100%);
  max-block-size: min(98dvb, 100%);
  overflow: hidden;
  display: grid;
  align-content: start;
  background: var(--surface-2);
  color: var(--text-1);
  max-inline-size: min(95vw, var(--size-content-3));
  margin: auto;
  padding: 0;
  position: fixed;
  inset: 0;
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-6);
  z-index: var(--layer-important);
  transition: opacity 0.5s var(--ease-3);
}

dialog::backdrop {
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
}

@media (prefers-reduced-motion: no-preference) {
  dialog[open] {
    animation: slide-out-down 0.5s var(--ease-3) forwards;
  }
}
@media (prefers-reduced-motion: no-preference) {
  dialog {
    animation: slide-out-right 0.5s var(--ease-3) forwards;
  }
}

dialog > header > button {
  border-radius: var(--radius-round);
  padding: 0.75ch;
  aspect-ratio: 1;
  flex-shrink: 0;
  align-items: center;
  justify-items: center;
  place-items: center;
  stroke: currentColor;
  stroke-width: 3px;
}
</style>
