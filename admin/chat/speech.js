const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-US";
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1;
  
  // Get available voices and select a female voice
  const voices = synth.getVoices();
  console.log(voices);
  const femaleVoice = voices.find((v) => v.voiceURI.includes('Female') && v.lang.includes('en-US'));
  voice.voice = femaleVoice;

  synth.speak(voice);
}