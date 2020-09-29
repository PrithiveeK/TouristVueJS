<template>
  <div>
    <ViewList />
    <template v-if="dataContent === 'services'">
      <AGAServices />
    </template>
    <template v-else-if="dataContent === 'suppliers'">
      <Suppliers />
    </template>
    <template v-else-if="dataContent === 'placeholder-services'">
      <PlaceholderServices />
    </template>
    <template v-else-if="dataContent === '99a-services'">
      <Services99A />
    </template>
  </div>
</template>

<script>
import ViewList from './ViewList'
import Services99A from './AGA/Services99A'
import AGAServices from './AGA/Services'
import Suppliers from './AGA/Suppliers'
import PlaceholderServices from './AGA/PlaceholderServices'

export default {
  name: 'AGA',
  props: ['dataContent'],
  components: {
    Services99A,
    AGAServices,
    Suppliers,
    PlaceholderServices,
    ViewList
  }
}
</script>
