const e=()=>{const t=document.getElementById("root");t&&(t.innerHTML=`
    <div class="min-h-screen bg-gray-100 flex items-center justify-center relative overflow-hidden">
      <!-- Background with blur overlay -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 max-w-sm w-full mx-auto p-6">
        <!-- Profile Section -->
        <div class="bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center space-y-4 transition-all duration-1000 opacity-0 translate-y-8" id="profile-card">
          <!-- Profile Image -->
          <div class="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-300">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Profile" class="w-full h-full object-cover">
          </div>
          
          <!-- Name and Bio -->
          <div>
            <h1 class="text-2xl font-bold text-gray-800 mb-2">Daileen</h1>
            <p class="text-gray-600 text-lg">✨ Content Creator ✨</p>
          </div>
          
          <!-- Links -->
          <div class="space-y-4">
            <a href="https://www.instagram.com/manifestcasey" target="_blank" class="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              🔥 Exclusive Content
            </a>
            
            <a href="https://www.instagram.com/manifestcasey" target="_blank" class="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              📸 Instagram
            </a>
            
            <a href="https://www.instagram.com/manifestcasey" target="_blank" class="block w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              💬 Chat with me
            </a>
          </div>
        </div>
      </div>
    </div>
  `,setTimeout((()=>{const e=document.getElementById("profile-card");e&&(e.style.opacity="1",e.style.transform="translateY(0)")}),100))};document.addEventListener("DOMContentLoaded",e);