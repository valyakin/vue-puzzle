import shuffle from 'lodash/shuffle'
import uniqid from 'uniqid'
import vueSlider from 'vue-slider-component'
import { Tile } from 'src/components'

const TILE_SIZE = 10
const TILES_IN_ROW = 5
const BOARD_APPEAR_TIME = 1000
const CHUNK_APPEAR_TIME = 20

export default {
  components: {
    Tile,
    vueSlider,
  },
  data () {
    return {
      shadowTiles: [],
      tiles: [],
      srcIndex: null,
      tileSize: TILE_SIZE,
      tilesInRow: TILES_IN_ROW,
    }
  },
  computed: {
    boardSize () {
      return `${this.tilesInRow * this.tileSize}rem`
    },
    tilesCount () {
      return this.tilesInRow ** 2
    },
    timePerTile () {
      return BOARD_APPEAR_TIME / this.tilesCount
    },
    tilesInChunk () {
      return Math.max(Math.floor(CHUNK_APPEAR_TIME / this.timePerTile), 1)
    },
  },
  methods: {
    shuffleTiles () {
      this.tiles = shuffle(this.tiles)
      this.srcIndex = null
    },
    resetTiles () {
      this.tileSize = TILE_SIZE
      this.tilesInRow = TILES_IN_ROW
      this.changeTilesCount()
    },
    changeTilesCount () {
      this.srcIndex = null
      this.tiles = []
      this.shadowTiles = shuffle(this.initTiles())
      this.animateTilesAppear()
    },
    animateTilesAppear () {
      if (this.shadowTiles.length > 0) {
        this.tiles = this.tiles.concat(this.shadowTiles.splice(0, this.tilesInChunk))
        setTimeout(this.animateTilesAppear, CHUNK_APPEAR_TIME)
      }
    },
    indexById (id) {
      return this.tiles.map(t => t.id).indexOf(id)
    },
    drag (id) {
      this.srcIndex = this.indexById(id)
    },
    drop (id) {
      const dstIndex = this.indexById(id)
      if (this.srcIndex != null) {
        this.doSwap(this.srcIndex, dstIndex)
      }
    },
    click (id) {
      const index = this.indexById(id)
      if (this.srcIndex != null) {
        this.doSwap(this.srcIndex, index)
      } else {
        this.srcIndex = index
      }
    },
    doSwap (srcIndex, dstIndex) {
      const srcItem = this.tiles[srcIndex]
      const dstItem = this.tiles[dstIndex]
      this.tiles.splice(srcIndex, 1, dstItem)
      this.tiles.splice(dstIndex, 1, srcItem)
      this.srcIndex = null
    },
    initTiles () {
      return [...Array(this.tilesCount)].map(this.getTile)
    },
    getTile () {
      return {
        id: uniqid(),
      }
    },
  },
  mounted () {
    this.tiles = shuffle(this.initTiles())
  },
}
