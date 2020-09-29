<template>
  <div>
    <ViewList />
    <template v-if="$route.params.dataContent === 'connected-services'">
      <ConnectedServices />
    </template>
    <template v-else-if="$route.params.dataContent === 'branch'">
      <Branch />
    </template>
    <template v-else-if="$route.params.dataContent === 'staff'">
      <Staff />
    </template>
    <template v-else-if="$route.params.dataContent === 'tc'">
      <TC />
    </template>
    <template v-else>
      <Details />
    </template>
  </div>
</template>

<script>
import ViewList from './ViewList'
import Details from './SuperCompany/Details'
import ConnectedServices from './SuperCompany/ConnectedServices'
import Branch from './SuperCompany/Branch'
import Staff from './SuperCompany/Staff'
import TC from './SuperCompany/TC'

export default {
  components: {
    Details,
    ConnectedServices,
    Branch,
    Staff,
    TC,
    ViewList
  }
}
</script>
