<script lang="ts">
import { computed, createVNode, defineComponent, type CSSProperties } from 'vue'

export default defineComponent({
  name: 'AppIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '18px',
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
  setup(props) {
    return () => {
      const style = computed((): CSSProperties => {
        const { size, color } = props
        const fontSize = `${size.replace('px', '')}px`
        return { fontSize, color }
      })
      // 图标来源有多种，比如element-plus的icon，font-awesome的icon，自己的icon

      return createVNode('i', {
        class: [props.name, 'icon'],
        style,
      })
    }
  },
})
</script>
