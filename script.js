function managePreferences() {
    return {
      savePreference: function(key, value) {
        try {
          localStorage.setItem(key, JSON.stringify(value));
          console.log(`Preference '${key}' saved:`, value);
        } catch (error) {
          console.error("Error saving to localStorage:", error);
        }
      },
      getPreference: function(key) {
        try {
          const storedValue = localStorage.getItem(key);
          return storedValue ? JSON.parse(storedValue) : null;
        } catch (error) {
          console.error("Error retrieving from localStorage:", error);
          return null;
        }
      },
      removePreference: function(key) {
        localStorage.removeItem(key);
        console.log(`Preference '${key}' removed.`);
      }
    };
  }
  
const preferencesManager = managePreferences();
  

document.addEventListener('DOMContentLoaded', function() {
    const triggerButton = document.getElementById('triggerButton');
    const animatedImage = document.getElementById('animatedImage');
    const animationPreferenceKey = 'imageAnimationPreference';
  
// Load the preferred animation on page load
const preferredAnimation = preferencesManager.getPreference(animationPreferenceKey) || 'rotate';
    if (preferredAnimation === 'rotate') {
      animatedImage.classList.add('rotate-animation');
    } else if (preferredAnimation === 'slide-in') {
      animatedImage.classList.add('slide-in-animation');
    }
  
triggerButton.addEventListener('click', function() {
    // Toggle between the two animations
    if (animatedImage.classList.contains('rotate-animation')) {
      animatedImage.classList.remove('rotate-animation');
      animatedImage.classList.add('slide-in-animation');
      preferencesManager.savePreference(animationPreferenceKey, 'slide-in');
    } else {
      animatedImage.classList.remove('slide-in-animation');
      animatedImage.classList.add('rotate-animation');
      preferencesManager.savePreference(animationPreferenceKey, 'rotate');
      }
    });
  });