<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Domain Name Registration Page</h1>
    <input
      type="email"
      placeholder="Owner's Email"
      class="border p-2 mb-4 w-full"
      v-model="registrationForm.email"
    />
    <input
      type="text"
      placeholder="Enter your desired domain name"
      class="border p-2 mb-4 w-full"
      v-model="registrationForm.domainName"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded"
      @click="registerDomain"
    >
      Register Domain
    </button>
    <p class="mt-4">
      Please note that domain registration is subject to availability
    </p>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "@/store";

const store = useStore();

const registrationForm = reactive({
  email: "",
  domainName: "",
});

async function registerDomain() {

  if (registrationForm.email && registrationForm.domainName) {
    await store.registerDomain(registrationForm.email, registrationForm.domainName);
    alert(`Domain ${domainName} registered successfully!`);
  } else {
    alert("Please fill in all fields.");
  }
}
</script>
