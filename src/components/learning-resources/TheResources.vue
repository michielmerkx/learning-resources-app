<template>
  <base-card>
    <!-- There is no click event on the <button> in BaseButton.vue, 
  yet this will work because of fallthrough attributes. -->
    <!-- When you add props or event listeners on custom components, 
  then by default they fall through to the root level element in that
  custom component's template. -->
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">
      Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">
      Add Resource
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'It\'s google.',
          link: 'https://google.org'
        }
      ]
    }
  },
  // provide to all lower level components (children and their children)
  provide() {
    return {
      theResources: this.storedResources,
      addResource: this.addResource,
      deleteItem: this.removeResource
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      this.storedResources.unshift(
        {
          id: new Date().toISOString(),
          title: title,
          description: description,
          link: link
        }
      )
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId){
      // This doesn't work because new array is not 'reprovided'.
      // App will continue working with the original array.
      // this.storedResources = this.storedResources.filter(
      //   (res) => res.id !== resId
      // )
      // Use the splice method instead, which manipulates original array
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1)
    }
  }
}
</script>