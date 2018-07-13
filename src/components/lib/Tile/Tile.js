const COLORS = [
  '#f90e44', '#7b8b57', '#a2efb5', '#77b5b3',
  '#28aa8c', '#bed294', '#386b73', '#529449',
  '#e35739', '#4aac49', '#22a8b4', '#6c0125',
  '#df747d', '#3368b4', '#019263', '#d20bd4',
]

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    focused: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorIndex () {
      return this.id.split('').reduce((sum, char) => (sum += char.charCodeAt()), 0) % COLORS.length
    },
    color () {
      return COLORS[this.colorIndex]
    },
  },
  methods: {
    onDragstart (e) {
      e.dataTransfer.setData('firefox', 'fix')
      return this.$emit('dragstart', this.id)
    },
    onDragenter (e) {
      return this.$emit('dragenter', this.id)
    },
    onDragover (e) {
      return this.$emit('dragover', this.id)
    },
    onDragleave (e) {
      return this.$emit('dragleave', this.id)
    },
    onDrag (e) {
      return this.$emit('drag', this.id)
    },
    onDrop (e) {
      return this.$emit('drop', this.id)
    },
    onDragend (e) {
      return this.$emit('dragend', this.id)
    },
    onClick (e) {
      return this.$emit('click', this.id)
    },
  },
}
