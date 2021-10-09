<template>
  <button class="wl-button" :class="[`wl-button--${type}`,{
      'is-plain':plain
  }]">
      <span><slot></slot></span>
  </button>
</template>

<script>
export default {
    name: 'WlButton',
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        plain: {
            type: Boolean,
            default: false
        }
    },
    created(){
        console.log(this.type)
    }
}
</script>

<style lang="scss" scoped>
.wl-button--primary {
    background: rgb(61, 211, 248);
}
.wl-button--success {
    background: rgb(77, 248, 61);
}
.wl-button--danger {
    background: rgb(248, 61, 61);
}
.is-plain {
    border-radius: 50%;
}
</style>