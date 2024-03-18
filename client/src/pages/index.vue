<template>
  <div>Test server</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import {io, type Socket} from 'socket.io-client'

const socket = ref<Socket>()

onMounted(() => {
  socket.value = io()
})
</script>
