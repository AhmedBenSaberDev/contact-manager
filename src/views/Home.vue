<template>
  <div class="home">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab" @click="currentTab = tab">
        <a class="nav-link" :class="{active: currentTab== tab}">{{tab}}</a>
      </li>
    </ul>
    <component
      :is="currentTabComponent"
      :contactsList="contactsList"
      :contactToEdit="contactToEdit"
      @edit-contact="editContact"
      @add-contact="addContact"
      @delete-contact="deleteContact"
      @update-contact="updateContact"
      class="py-3"
      ></component>
  </div>
</template>

<script>

import ContactList from "@/components/ContactList.vue";
import Add from '@/components/Add.vue';
import Edit from '@/components/Edit.vue';


export default {
  name: "Home",
  components: { ContactList, Add , Edit },
  data() {
    return {
      contactToEdit:{},
      contactsList: [
        {
          id: 1,
          name: "Leanne Graham",
          email: "leanne.graham@gmail.com",
          phone: "+21622334455",
          address: {
            street: "Kulas Light",
            city: "Gwenborough",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          email: "Shanna@melissa.tv",
          phone: "010-692-6593 x09125",
          address: {
            street: "Victor Plains",
            city: "Wisokyburgh",
          },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          email: "Nathan@yesenia.net",
          phone: "1-463-123-4447",
          address: {
            street: "Douglas Extension",
            city: "McKenziehaven",
          },
        },
      ],
      currentTab: "ContactList",
      tabs: ["ContactList", "Add"]
    };
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab;
    }
  },
  methods: {
    addContact(newContact) {
      this.contactsList.unshift(newContact)
      this.currentTab= "ContactList"
    },
    deleteContact(contactId)
    {
      this.contactsList.forEach((element,index) => {
        if(contactId == element.id)
        {
          return this.contactsList.splice(index,1);
        }
      });
    },
    editContact(contact)
    {
      this.contactToEdit = contact;
      this.currentTab = "Edit";
    },
    updateContact(contactToUpdate)
     {
       
       this.contactsList.forEach(contact => {
         if(contactToUpdate.id == contact.id)
         {
           contactToUpdate = contact;
         }
       });
     }
  }
};
</script>
