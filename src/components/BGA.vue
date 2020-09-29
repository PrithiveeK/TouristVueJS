<template>
  <div>
    <ViewList />
    <template v-if="dataContent === 'services'">
      <BGAServices />
    </template>
    <template v-else-if="dataContent === 'agent'">
      <Agent />
    </template>
    <template v-else-if="dataContent === 'sub-agent'">
      <SubAgent />
    </template>
    <template v-else-if="dataContent === 'quotations'">
      <Quotations />
    </template>
  </div>
</template>

<script>
import ViewList from './ViewList'
import Agent from './BGA/Agent'
import Quotations from './BGA/Quotations'
import BGAServices from './BGA/Services'
import SubAgent from './BGA/SubAgent'

export default {
  name: 'BGA',
  props: ['dataContent'],
  components: {
    Agent,
    Quotations,
    BGAServices,
    SubAgent,
    ViewList
  }
}
</script>
