<template>
<div>
    <h1 class="text-center">Edit contact</h1>
 <form @submit.prevent='updateContact'>
      <div class="mb-3">
          <label for="contactName" class="form-label">Name</label>
          <input type="text" class="form-control" id="contactName" v-model="contactToEdit.name">
      </div>
      <div class="row mb-3">
          <div class="col">
            <label for="contactEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="contactEmail" v-model="contactToEdit.email">
          </div>
          <div class="col">
            <label for="contactPhone" class="form-label">Phone</label>
            <input type="text" class="form-control" id="contactPhone" v-model="contactToEdit.phone">
          </div>
      </div>
      <div class="row mb-3">
          <div class="col">
            <label for="contactStreet" class="form-label">Street</label>
            <input type="text" class="form-control" id="contactStreet" v-model="contactToEdit.address.street">
          </div>
          <div class="col">
            <label for="contactCity" class="form-label">City</label>
            <input type="text" class="form-control" id="contactCity" v-model="contactToEdit.address.city">
          </div>
      </div>
      <button class="btn btn-primary">Edit</button>
  </form>
   <FlashMessage :position="'right bottom'"></FlashMessage>
</div>
</template>

<script>
export default {
    props:{
        contactToEdit:Object
    },
    data(){
        return{
            contact: this.$route.params.contact
        }
    },
    methods:{
        updateContact()
        {
            this.$emit('update-contact',this.contactToEdit);

            this.flashMessage.success({
                title: 'Success !',
                message: 'Your contact has been updated'
            });
        }
    }
}

</script>

<style>

</style>