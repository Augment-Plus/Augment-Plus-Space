<template>
    <div
      class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style="font-family: Inter, 'Noto Sans', sans-serif"
    >
      <div class="layout-container flex h-full grow flex-col">
        <header
          class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f0f4] px-10 py-3"
        >
          <div class="flex items-center gap-4 text-[#111117]">
            <div class="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2
              class="text-[#111117] text-lg font-bold leading-tight tracking-[-0.015em]"
            >
              Augment Plus
            </h2>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a
                class="text-[#111117] text-sm font-medium leading-normal"
                href="#"
                >Home</a
              >
              <a
                class="text-[#111117] text-sm font-medium leading-normal"
                href="#"
                >Domains</a
              >
              <a
                class="text-[#111117] text-sm font-medium leading-normal"
                href="#"
                >Hosting</a
              >
              <a
                class="text-[#111117] text-sm font-medium leading-normal"
                href="#"
                >Community</a
              >
              <a
                class="text-[#111117] text-sm font-medium leading-normal"
                href="#"
                >Docs</a
              >
            </div>
            <div class="flex gap-2">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#6b6deb] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Get Started</span>
              </button>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f0f4] text-[#111117] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Log In</span>
              </button>
            </div>
          </div>
        </header>
        <div class="flex flex-1 justify-center py-5">
          <div
            class="layout-content-container flex flex-col max-w-[960px] flex-1"
          >
            <div class="@container">
              <div class="@[480px]:p-4">
                <div
                  class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style="
                    background-image: linear-gradient(
                        rgba(0, 0, 0, 0.1) 0%,
                        rgba(0, 0, 0, 0.4) 100%
                      ),
                      url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRatyUtHqlTE1raHyc2Eqvk6ssrT1T8dllPkj51qXiqz9c_SdW2jIVmog-ojAuANJg6nr9KSu41D_c57a_G9MfeeyzVqthbnxPaVltrXEj3OXMX3o89lQ7LhULLmdrI1ItIddeFCZdk3iuwuFpeLP9EucD7rKmKDxMC4KeHgsnNq7ZP6yYRftqhAMYkcobeIbv-6FE_MCG_c_BiCYytsjdYF9DXCJEy_pEgTsqqQKujkEoKOkQQd_M7JauUSb4KXLP5cYLwjmfOg4V');
                  "
                >
                  <div class="flex flex-col gap-2 text-center">
                    <h1
                      class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Build your web presence with Augment Plus
                    </h1>
                    <h2
                      class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                    >
                      Get a domain name, app hosting, and access to our vibrant
                      web development community for just $3.
                    </h2>
                  </div>
                  <label
                    class="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16"
                  >
                    <div
                      class="flex w-full flex-1 items-stretch rounded-lg h-full"
                    >
                      <div
                        class="text-[#646487] flex border border-[#dcdce5] bg-white items-center justify-center pl-[15px] rounded-l-lg border-r-0"
                        data-icon="MagnifyingGlass"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path
                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        placeholder="Find your perfect domain"
                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111117] focus:outline-0 focus:ring-0 border border-[#dcdce5] bg-white focus:border-[#dcdce5] h-full placeholder:text-[#646487] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        value=""
                      />
                      <div
                        class="flex items-center justify-center rounded-r-lg border-l-0 border border-[#dcdce5] bg-white pr-[7px]"
                      >
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#6b6deb] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                          <span class="truncate">Search</span>
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="p-6 max-w-lg mx-auto">
              <h3 class="text-2xl font-bold mb-4">
                Launch A Personal App For Your Profession
              </h3>
              <p class="mb-4">
                <select
                  v-model="selectedProfession"
                  class="border p-2 w-full rounded"
                >
                  <option value="">-- Select Profession --</option>
                  <template v-for="service in services" :key="service.ext">
                    <option
                      v-for="type in service.types"
                      :key="type"
                      :value="type"
                    >
                      {{ type }}
                    </option>
                  </template>
                </select>
              </p>

              <div
                v-if="selectedDomain"
                class="mb-4 p-4 border rounded bg-gray-50"
              >
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
            <h2
              class="text-[#111117] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Everything you need to launch your project
            </h2>
            <div class="flex flex-col gap-10 px-4 py-10 @container">
              <div class="flex flex-col gap-4">
                <h1
                  class="text-[#111117] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                >
                  All-in-one platform
                </h1>
                <p
                  class="text-[#111117] text-base font-normal leading-normal max-w-[720px]"
                >
                  Augment Plus provides a seamless experience for web developers,
                  from domain registration to app hosting and community support.
                </p>
              </div>
              <div
                class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0"
              >
                <div
                  class="flex flex-1 gap-3 rounded-lg border border-[#dcdce5] bg-white p-4 flex-col"
                >
                  <div
                    class="text-[#111117]"
                    data-icon="GlobeHemisphereWest"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2
                      class="text-[#111117] text-base font-bold leading-tight"
                    >
                      Domain Registration
                    </h2>
                    <p
                      class="text-[#646487] text-sm font-normal leading-normal"
                    >
                      Find and register your perfect domain name with our
                      easy-to-use search tool.
                    </p>
                  </div>
                </div>
                <div
                  class="flex flex-1 gap-3 rounded-lg border border-[#dcdce5] bg-white p-4 flex-col"
                >
                  <div
                    class="text-[#111117]"
                    data-icon="Database"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2
                      class="text-[#111117] text-base font-bold leading-tight"
                    >
                      App Hosting
                    </h2>
                    <p
                      class="text-[#646487] text-sm font-normal leading-normal"
                    >
                      Host your web apps with our reliable and scalable
                      infrastructure, optimized for performance.
                    </p>
                  </div>
                </div>
                <div
                  class="flex flex-1 gap-3 rounded-lg border border-[#dcdce5] bg-white p-4 flex-col"
                >
                  <div
                    class="text-[#111117]"
                    data-icon="UsersThree"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2
                      class="text-[#111117] text-base font-bold leading-tight"
                    >
                      Community Access
                    </h2>
                    <p
                      class="text-[#646487] text-sm font-normal leading-normal"
                    >
                      Connect with other developers, share your work, and get
                      feedback in our active community forum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2
              class="text-[#111117] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Join our community
            </h2>
            <div class="flex flex-col gap-10 px-4 py-10 @container">
              <div class="flex flex-col gap-4">
                <h1
                  class="text-[#111117] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                >
                  Connect, learn, and grow
                </h1>
                <p
                  class="text-[#111117] text-base font-normal leading-normal max-w-[720px]"
                >
                  Our community is a place for developers of all levels to
                  connect, share knowledge, and collaborate on projects.
                </p>
              </div>
              <div
                class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3"
              >
                <div class="flex flex-col gap-3 pb-3">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                    style="
                      background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLA_A8Q2nBsSb_RsofNoSgnlqKfKHnGY5_hyKOokzHWDaIIgOZR5jQHnAit1-XDvqLmP5v5RbluAJwvXdKUOmva-2iAfpWtk3bq5ZHq57A12HFgHG7i_767_kgx1hSVXmXsxnptBNth18bVIKd8bBc8tm59lrz567ZBDB9Qm4zd_M5MMLQB-a75IrANWW-BVFsMP4_xYtCJfNBRfGFBFuiV8xLM6oKvhrk7t_sSK4fWOwsBuFi7FxBIVLGYYNaRHalSzy6_Zh64nm0');
                    "
                  ></div>
                  <div>
                    <p
                      class="text-[#111117] text-base font-medium leading-normal"
                    >
                      Collaborate
                    </p>
                    <p
                      class="text-[#646487] text-sm font-normal leading-normal"
                    >
                      Find collaborators for your projects, join teams, and work
                      together on exciting new ideas.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col gap-3 pb-3">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                    style="
                      background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDviVuUomx706MHBchLdRTKe3pjQud7geQk_E1jk09ETl4gEpjjjjdqF7B0NIiNUAtLfT7tkMKqAlEO1JVJwxT7ne0jAktbIC2drWb2NGKqOPZww5e-QsXLyMh8mt_EWO-nsW9LHc5b7Sq1IgUKX_eBJ6XpvLM38dmXtPvo5pODopFLc9u-5MbJSOFfGSNMJoisyoNhThLEOoDjmtQwxbUcv-yfZcZWjyRCOYHOWhd7TGEb2yvQ0LqA1k7UhRS_K8u5rdChjsphgoIY');
                    "
                  ></div>
                  <div>
                    <p
                      class="text-[#111117] text-base font-medium leading-normal"
                    >
                      Learn
                    </p>
                    <p
                      class="text-[#646487] text-sm font-normal leading-normal"
                    >
                      Access tutorials, documentation, and expert advice to
                      expand your skills and stay up-to-date with the latest
                      technologies.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col gap-3 pb-3">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                    style="
                      background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD70UBuhkxmh7I2quPFWNPm5QGP8pput3Nbj4UUSd18QH-YPCwDtNPRpKfD9A-4etKtEI2tnJwOrYIc9IEDWdXat9wTttg7CFMPTAuqJHlxlkusMz3XYpDuBfGnvK6gidUo_LrLWLQGezy96ZssSz5-GGmA4ShoMUhC3O5jbHv1sUvt0v41deX62S4eEDkUqmM77dvSnmUxzGI1876BaGZSl8sESqvO41V_yMDAMfsFr6yw_exCxWxyu5_sgLC-kJwqQElDLVV34Ziv');
                    "
                  ></div>
                  <div>
                    <p
                      class="text-[#111117] text-base font-medium leading-normal"
                    >
                      Share
                    </p>
                    <p
                      class="text-[#646487] text-sm font-normal leading-normal"
                    >
                      Showcase your projects, get feedback from peers, and
                      inspire others with your creativity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="@container">
              <div
                class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"
              >
                <div class="flex flex-col gap-2 text-center">
                  <h1
                    class="text-[#111117] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Ready to build something amazing?
                  </h1>
                  <p
                    class="text-[#111117] text-base font-normal leading-normal max-w-[720px"
                  >
                    Join Augment Plus today and start your web development
                    journey.
                  </p>
                </div>
                <div class="flex flex-1 justify-center">
                  <div class="flex justify-center">
                    <button
                      class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#6b6deb] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                    >
                      <span class="truncate">Get Started</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="flex justify-center">
          <div class="flex max-w-[960px] flex-1 flex-col">
            <footer
              class="flex flex-col gap-6 px-5 py-10 text-center @container"
            >
              <div
                class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around"
              >
                <a
                  class="text-[#646487] text-base font-normal leading-normal min-w-40"
                  href="#"
                  >About</a
                >
                <a
                  class="text-[#646487] text-base font-normal leading-normal min-w-40"
                  href="#"
                  >Contact</a
                >
                <a
                  class="text-[#646487] text-base font-normal leading-normal min-w-40"
                  href="#"
                  >Terms of Service</a
                >
                <a
                  class="text-[#646487] text-base font-normal leading-normal min-w-40"
                  href="#"
                  >Privacy Policy</a
                >
              </div>
              <p class="text-[#646487] text-base font-normal leading-normal">
                © 2023 Augment Plus. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
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
