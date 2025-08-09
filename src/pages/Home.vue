<template>
  <div class="p-6 max-w-lg mx-auto">
    <h3 class="text-2xl font-bold mb-4">
      Launch A Personal App For Your Profession
    </h3>
    <p class="mb-4">
      <select v-model="selectedProfession" class="border p-2 w-full rounded">
        <option value="">-- Select Profession --</option>
        <template v-for="service in services" :key="service.ext">
          <option v-for="type in service.types" :key="type" :value="type">
            {{ type }}
          </option>
        </template>
      </select>
    </p>

    <div v-if="selectedDomain" class="mb-4 p-4 border rounded bg-gray-50">
      <p><strong>Domain:</strong> {{ selectedDomain.ext }}</p>
      <p v-if="selectedDomain.price">
        <strong>Price:</strong> ${{ selectedDomain.price }} / year
      </p>
    </div>

    <button
      :disabled="!selectedDomain"
      class="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      Register & Host
    </button>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";

const services = reactive([
  { types: ["Designer", "Musician"], ext: ".pro", price: 5 },
  { types: ["Developer", "Writer", "Artist"], ext: ".dev", price: 10 },
  { types: ["Photographer", "Videographer"], ext: ".photo", price: 15 },
  { types: ["Chef", "Baker"], ext: ".cook", price: 20 },
  { types: ["Fitness Trainer", "Yoga Instructor"], ext: ".fit", price: 25 },
  { types: ["Consultant", "Coach"], ext: ".consult", price: 30 },
  { types: ["Teacher", "Tutor"], ext: ".edu", price: 35 },
  { types: ["Nonprofit", "Charity"], ext: ".org", price: 40 },
  { types: ["Real Estate Agent", "Broker"], ext: ".realty", price: 45 },
  { types: ["Health & Wellness", "Therapist"], ext: ".health", price: 50 },
  {
    types: ["Perfumes", "Wines & Alcoholic Beverages", "Hairs"],
    ext: ".store",
    price: 50,
  },
  { types: ["Electronics", "Clothing", "Provision"], ext: ".shop", price: 55 },
  { types: ["Travel", "Tourism"], ext: ".travel", price: 60 },
  { types: ["Food & Beverage", "Restaurant"], ext: ".food", price: 65 },
  { types: ["Entertainment", "Media"], ext: ".entertainment", price: 70 },
  { types: ["Gaming", "E-sports"], ext: ".gaming", price: 75 },
  { types: ["Finance", "Investment"], ext: ".finance", price: 80 },
  { types: ["Legal Services", "Lawyer"], ext: ".legal", price: 85 },
]);

const selectedProfession = ref("");

const selectedDomain = computed(() => {
  if (!selectedProfession.value) return null;
  return services.find((service) =>
    service.types.includes(selectedProfession.value)
  );
});
</script>
