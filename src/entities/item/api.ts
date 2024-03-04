import { Item } from 'entities/item'
import { api } from 'shared/api'
import { reactive } from 'vue'

const fetchItems = async (): Promise<Item[]> => await api.get('load_items').json()

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

import { config } from 'app/firebaseConfig'

const firebaseApp = initializeApp(config)
const db = getDatabase(firebaseApp)

const store = reactive({
  items: [],
  async setItems() {
    const entitiesRef = ref(db, 'items')
    onValue(entitiesRef, async (snapshot: any) => {
      this.items = await snapshot.val()
    })
  },
})

export { fetchItems, store }
