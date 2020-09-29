<template>
  <div class="view-list">
    <div
      class="list-item"
      v-for="(item,i) in routeList[$route.name]"
      :class="{'item-selected': item.route === $route.params.dataContent}"
      :key="i"
      @click="$router.replace({name: $route.name, params: {dataContent: item.route}})"
    >
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewList',
  data () {
    return {
      routeList: {
        'Quotations': [
          {title: 'Recent Quotations', route: 'recent'},
          {title: 'Expiring Quotations', route: 'expiring'},
          {title: 'Expired Quotations', route: 'expired'}
        ],
        'SuperCompany': [
          {title: 'Details', route: 'details'},
          {title: 'Connected Services', route: 'connected-services'},
          {title: 'Branch', route: 'branch'},
          {title: 'Staff', route: 'staff'},
          {title: 'Terms & Conditions', route: 'tc'}
        ],
        'MasterData': [
          {title: 'Basic Data List', route: 'package'},
          {title: 'Company Data List', route: 'company'},
          {title: 'Service Data List', route: 'services'},
          {title: 'Location Data List', route: 'location'}
        ],
        'BGA': [
          {title: 'Services', route: 'services'},
          {title: 'Agent', route: 'agent'},
          {title: 'Sub Agent', route: 'sub-agent'},
          {title: 'Quotations', route: 'quotations'}
        ],
        'AGA': [
          {title: 'Services', route: 'services'},
          {title: 'Suppliers', route: 'suppliers'},
          {title: 'Place Holder Services', route: 'placeholder-services'},
          {title: '99A Services', route: '99a-services'}
        ]
      }
    }
  }
}
</script>

<style scoped>
.view-list{
  padding-top: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  position: sticky;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 100;
  place-items: center;
  border-bottom: 3px solid var(--blue-color);
}
.list-item{
  border-radius: 20px 20px 0 0;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}
.list-item:not(.item-selected):hover{
  background-color: #ccc;
}
.item-selected{
  background-color: var(--blue-color);
  color: #eee;
  transform-origin: bottom;
  animation: flip-tab .3s ease;
}
.item-selected:hover{
  filter: brightness(1.2);
}
@keyframes flip-tab {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
</style>
