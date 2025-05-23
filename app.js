import React, { useState } from 'react';
import { ChevronRight, Star, Zap, Users, Brain, Heart, Trophy, Sparkles } from 'lucide-react';

const EntaneerQuizApp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [language, setLanguage] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [thaiName, setThaiName] = useState('');
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ selfConfidence: 0, connectivity: 0, problemSolver: 0 });
  const [selectedAdjective, setSelectedAdjective] = useState('');
  const [futurePersona, setFuturePersona] = useState('');

  const content = {
    thai: {
      selectLanguage: "เลือกภาษา / Select Language",
      thai: "ภาษาไทย",
      english: "English",
      enterName: "กรอกชื่อเล่นของคุณ",
      englishNameLabel: "ชื่อเล่นภาษาอังกฤษ",
      thaiNameLabel: "ชื่อเล่นภาษาไทย",
      startQuiz: "เริ่มทำแบบทดสอบ",
      quizTitle: "ค้นพบตัวตนวิศวกรของคุณ! 🚀",
      quizSubtitle: "ตอบคำถามเพื่อค้นหาบุคลิกภาพวิศวกร ENTANEER ของคุณ",
      next: "ถัดไป",
      previous: "ก่อนหน้า",
      finish: "เสร็จสิ้น",
      yourResult: "ผลลัพธ์ของคุณ! 🎉",
      dominantTrait: "ลักษณะเด่นของคุณคือ:",
      scoreBreakdown: "คะแนนของคุณ:",
      selfConfidence: "ความมั่นใจในตนเอง",
      connectivity: "การเชื่อมต่อ",
      problemSolver: "นักแก้ปัญหาและผู้สร้างการเปลี่ยนแปลง",
      futurePersonaPrompt: "คุณต้องการเป็นวิศวกรแบบไหนในอนาคต?",
      futurePersonaPlaceholder: "เช่น วิศวกรที่สร้างสรรค์และมีวิสัยทัศน์...",
      selectAdjective: "เลือกคำคุณศัพท์ที่ตรงกับคุณมากที่สุด:",
      createPersona: "สร้างเพอร์โซนา",
      yourPersona: "เพอร์โซนาของคุณ:",
      inspiration: "แรงบันดาลใจสำหรับคุณ:",
      welcomeMessage: "ยินดีต้อนรับสู่การเดินทาง ENTANEER ที่มหาวิทยาลัยเชียงใหม่! 🎓\n\nอาจารย์และเจ้าหน้าที่คณะวิศวกรรมศาสตร์พร้อมสนับสนุนคุณตลอดการเดินทางนี้ ร่วมกันสร้างอนาคตที่ยิ่งใหญ่!",
      questions: [
        {
          q: "เมื่อเผชิญกับปัญหาทางวิศวกรรมที่ซับซ้อน คุณมักจะ:",
          options: [
            "แบ่งปัญหาออกเป็นส่วนย่อยและวิเคราะห์อย่างเป็นระบบ",
            "ติดต่อเพื่อนร่วมงานและทำงานเป็นทีมเพื่อแก้ไขร่วมกัน",
            "ค้นคว้าปัญหาที่คล้ายกันและระดมความคิดหาแนวทางแก้ไขที่สร้างสรรค์"
          ]
        },
        {
          q: "โปรเจ็กต์วิศวกรรมในฝันของคุณคือ:",
          options: [
            "ปรับปรุงระบบที่มีอยู่ให้มีประสิทธิภาพสูงสุด",
            "ทำงานร่วมกับทีมสหสาขาวิชาจากหลายประเทศ",
            "พัฒนาแนวทางแก้ไขปัญหาในโลกจริง"
          ]
        },
        {
          q: "เมื่อเรียนรู้เทคโนโลยีใหม่ คุณชอบที่จะ:",
          options: [
            "ศึกษาพื้นฐานอย่างละเอียดก่อนนำไปใช้",
            "เรียนรู้ผ่านชุมชนออนไลน์และการสนทนากับเพื่อน",
            "ลองทำและค้นพบการใช้งานจริงด้วยตนเอง"
          ]
        },
        {
          q: "ในการนำเสนอกลุ่ม คุณมักจะ:",
          options: [
            "เตรียมการวิเคราะห์อย่างละเอียดและนำเสนอด้วยความมั่นใจ",
            "อำนวยความสะดวกในการสนทนาและให้ทุกคนมีส่วนร่วม",
            "เน้นการแสดงผลกระทบในโลกจริงและการนำไปใช้งาน"
          ]
        },
        {
          q: "แรงจูงใจที่ใหญ่ที่สุดของคุณในฐานะวิศวกรคือ:",
          options: [
            "การเชี่ยวชาญทักษะทางเทคนิคที่ซับซ้อนและบรรลุความเป็นเลิศส่วนบุคคล",
            "การสร้างเครือข่ายและทำงานกับทีมที่หลากหลายทั่วโลก",
            "การสร้างแนวทางแก้ไขที่สร้างการเปลี่ยนแปลงที่มีความหมายในสังคม"
          ]
        },
        {
          q: "เมื่อโปรเจ็กต์เจออุปสรรค คุณมักจะ:",
          options: [
            "อดทนและหาแนวทางทางเลือกด้วยความมุ่งมั่น",
            "ขอคำแนะนำจากพี่เลี้ยงและทำงานร่วมกับสมาชิกในทีม",
            "ปรับเปลี่ยนแนวทางอย่างรวดเร็วและปรับแนวทางแก้ไขให้เอาชนะความท้าทาย"
          ]
        },
        {
          q: "สภาพแวดล้อมการทำงานที่คุณชอบคือ:",
          options: [
            "ห้องปฏิบัติการที่มีอุปกรณ์ครบครันเพื่อการวิเคราะห์โดยละเอียด",
            "พื้นที่ทำงานร่วมกันแบบเปิดที่มีการปฏิสัมพันธ์กับทีมอย่างต่อเนื่อง",
            "สภาพแวดล้อมที่มีพลวัตที่คุณสามารถสร้างต้นแบบและทดสอบแนวทางแก้ไข"
          ]
        },
        {
          q: "คุณภูมิใจในงานวิศวกรรมที่:",
          options: [
            "แสดงให้เห็นความเป็นเลิศทางเทคนิคและความแม่นยำ",
            "นำผู้คนจากภูมิหลังที่แตกต่างกันมาทำงานร่วมกันได้สำเร็จ",
            "แก้ปัญหาที่คนอื่นคิดว่าเป็นไปไม่ได้"
          ]
        },
        {
          q: "เมื่ออธิบายงานวิศวกรรมของคุณให้คนอื่นฟัง คุณเน้น:",
          options: [
            "วิธีการทางเทคนิคและการวิเคราะห์อย่างเข้มงวดที่เกี่ยวข้อง",
            "กระบวนการทำงานร่วมกันและมุมมองที่หลากหลายที่รวมเข้าด้วยกัน",
            "ปัญหาในโลกจริงที่ได้รับการแก้ไขและการเปลี่ยนแปลงเชิงบวกที่เกิดขึ้น"
          ]
        }
      ]
    },
    english: {
      selectLanguage: "เลือกภาษา / Select Language",
      thai: "ภาษาไทย",
      english: "English",
      enterName: "Enter Your Name",
      englishNameLabel: "Your Nickname",
      thaiNameLabel: "Thai Nickname",
      startQuiz: "Start Quiz",
      quizTitle: "Discover Your Engineer Identity! 🚀",
      quizSubtitle: "Answer the questions to find your ENTANEER engineering persona",
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      yourResult: "Your Results! 🎉",
      dominantTrait: "Your dominant trait is:",
      scoreBreakdown: "Your scores:",
      selfConfidence: "Self-Confidence",
      connectivity: "Connectivity",
      problemSolver: "Problem Solver & Change Maker",
      futurePersonaPrompt: "What kind of engineer do you want to be in the future?",
      futurePersonaPlaceholder: "e.g., A creative and visionary engineer...",
      selectAdjective: "Select the adjective that best describes you:",
      createPersona: "Create Persona",
      yourPersona: "Your Persona:",
      inspiration: "Inspiration for you:",
      welcomeMessage: "Welcome to The ENTANEER Journey at Chiang Mai University! 🎓\n\nLecturers and staff at the Engineering Faculty are ready to support you throughout this journey. Let's build a great future together!",
      questions: [
        {
          q: "When facing a complex engineering problem, you typically:",
          options: [
            "Break it down methodically and analyze each component systematically",
            "Reach out to colleagues and form a team to tackle it together",
            "Research similar problems and brainstorm innovative solutions"
          ]
        },
        {
          q: "Your ideal engineering project would involve:",
          options: [
            "Optimizing an existing system to achieve maximum efficiency",
            "Collaborating with interdisciplinary teams from different countries",
            "Developing a solution that addresses a real-world social issue"
          ]
        },
        {
          q: "When learning new technology, you prefer to:",
          options: [
            "Study the fundamentals thoroughly before applying them",
            "Learn through online communities and peer discussions",
            "Experiment hands-on and discover practical applications"
          ]
        },
        {
          q: "In group presentations, you usually:",
          options: [
            "Prepare detailed analysis and present with confidence",
            "Facilitate discussions and ensure everyone contributes",
            "Focus on demonstrating real-world impact and implementation"
          ]
        },
        {
          q: "Your biggest motivation as an engineer is:",
          options: [
            "Mastering complex technical skills and achieving personal excellence",
            "Building networks and working with diverse teams globally",
            "Creating solutions that make a meaningful difference in society"
          ]
        },
        {
          q: "When a project hits obstacles, you tend to:",
          options: [
            "Persist with determination and find alternative approaches",
            "Seek advice from mentors and collaborate with team members",
            "Pivot quickly and adapt the solution to overcome challenges"
          ]
        },
        {
          q: "Your preferred work environment is:",
          options: [
            "A well-equipped lab where you can focus on detailed analysis",
            "An open collaborative space with constant team interaction",
            "A dynamic setting where you can prototype and test solutions"
          ]
        },
        {
          q: "You're most proud of engineering work that:",
          options: [
            "Demonstrates technical excellence and precision",
            "Brings together people from different backgrounds successfully",
            "Solves problems others thought were impossible"
          ]
        },
        {
          q: "When explaining your engineering work to others, you emphasize:",
          options: [
            "The technical methodology and rigorous analysis involved",
            "The collaborative process and diverse perspectives incorporated",
            "The real-world problems solved and positive changes created"
          ]
        }
      ]
    }
  };

  const adjectives = {
    selfConfidence: {
      thai: [
        { thai: "เชี่ยวชาญเทคนิค", english: "Analytical" },
        { thai: "มีระบบระเบียบ", english: "Methodical" },
        { thai: "มุ่งมั่น", english: "Determined" },
        { thai: "แม่นยำ", english: "Precise" },
        { thai: "เป็นระบบ", english: "Systematic" },
        { thai: "ยืดหยุ่น", english: "Resilient" },
        { thai: "มีสมาธิ", english: "Focused" },
        { thai: "เข้มงวด", english: "Rigorous" },
        { thai: "อดทน", english: "Persistent" },
        { thai: "พิถีพิถัน", english: "Meticulous" }
      ],
      english: ["Analytical", "Methodical", "Determined", "Precise", "Systematic", "Resilient", "Focused", "Rigorous", "Persistent", "Meticulous"]
    },
    connectivity: {
      thai: [
        { thai: "ร่วมมือ", english: "Collaborative" },
        { thai: "เชื่อมโยง", english: "Networked" },
        { thai: "สื่อสาร", english: "Communicative" },
        { thai: "ปรับตัว", english: "Adaptive" },
        { thai: "โลกกว้าง", english: "Global" },
        { thai: "บูรณาการ", english: "Integrative" },
        { thai: "สังคม", english: "Social" },
        { thai: "เชื่อมสะพาน", english: "Bridge-building" },
        { thai: "ทูต", english: "Diplomatic" },
        { thai: "ประสานกลมกลืน", english: "Harmonizing" }
      ],
      english: ["Collaborative", "Networked", "Communicative", "Adaptive", "Global", "Integrative", "Social", "Bridge-building", "Diplomatic", "Harmonizing"]
    },
    problemSolver: {
      thai: [
        { thai: "นวัตกรรม", english: "Innovative" },
        { thai: "เปลี่ยนแปลง", english: "Transformative" },
        { thai: "มีผลกระทบ", english: "Impactful" },
        { thai: "สร้างสรรค์", english: "Creative" },
        { thai: "ปฏิวัติ", english: "Revolutionary" },
        { thai: "บุกเบิก", english: "Pioneering" },
        { thai: "มีวิสัยทัศน์", english: "Visionary" },
        { thai: "พลวัต", english: "Dynamic" },
        { thai: "มุ่งแก้ปัญหา", english: "Solution-oriented" },
        { thai: "ขับเคลื่อนการเปลี่ยนแปลง", english: "Change-driving" }
      ],
      english: ["Innovative", "Transformative", "Impactful", "Creative", "Revolutionary", "Pioneering", "Visionary", "Dynamic", "Solution-oriented", "Change-driving"]
    }
  };

  const getHighestScoringCategory = () => {
    const maxScore = Math.max(scores.selfConfidence, scores.connectivity, scores.problemSolver);
    if (scores.selfConfidence === maxScore) return 'selfConfidence';
    if (scores.connectivity === maxScore) return 'connectivity';
    return 'problemSolver';
  };

  const getCategoryName = (category) => {
    const names = {
      selfConfidence: content[language].selfConfidence,
      connectivity: content[language].connectivity,
      problemSolver: content[language].problemSolver
    };
    return names[category];
  };

  const getInspirationMessage = () => {
    const category = getHighestScoringCategory();
    const messages = {
      thai: {
        selfConfidence: "เริ่มต้นจากความมุ่งมั่นในการเรียนรู้ และพัฒนาไปสู่ความเป็นผู้เชี่ยวชาญที่มั่นใจในตนเอง! 💪",
        connectivity: "เริ่มต้นจากการสร้างเพื่อนใหม่ และพัฒนาไปสู่ผู้นำที่เชื่อมโยงคนและเทคโนโลยี! 🤝",
        problemSolver: "เริ่มต้นจากความอยากรู้อยากเห็น และพัฒนาไปสู่ผู้สร้างการเปลี่ยนแปลงที่ยิ่งใหญ่! 🌟"
      },
      english: {
        selfConfidence: "Start with your determination to learn and grow into a confident expert! 💪",
        connectivity: "Start by making new friends and grow into a leader who connects people and technology! 🤝",
        problemSolver: "Start with your curiosity and grow into a great change maker! 🌟"
      }
    };
    return messages[language][category];
  };

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setCurrentStep(1);
  };

  const handleNameSubmit = () => {
    if (englishName.trim()) {
      setCurrentStep(2);
    }
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setAnswers({ ...answers, [questionIndex]: answerIndex });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < content[language].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate scores
      let selfConfidence = 0, connectivity = 0, problemSolver = 0;
      Object.values(answers).forEach(answer => {
        if (answer === 0) selfConfidence++;
        else if (answer === 1) connectivity++;
        else if (answer === 2) problemSolver++;
      });
      setScores({ selfConfidence, connectivity, problemSolver });
      setCurrentStep(3);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleCreatePersona = () => {
    if (selectedAdjective && futurePersona.trim()) {
      setCurrentStep(5);
    }
  };

  // Step 0: Language Selection
  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition-all duration-300">
          <div className="mb-8">
            <Sparkles className="mx-auto text-6xl text-purple-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">ENTANEER Quiz</h1>
            <p className="text-gray-600">เลือกภาษา / Select Language</p>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => handleLanguageSelect('thai')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🇹🇭 ภาษาไทย
            </button>
            <button
              onClick={() => handleLanguageSelect('english')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🇺🇸 English
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Name Input
  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <Heart className="mx-auto text-6xl text-pink-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{content[language].enterName}</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">{content[language].englishNameLabel}</label>
              <input
                type="text"
                value={englishName}
                onChange={(e) => setEnglishName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
                placeholder="John, Mary, Alex..."
              />
            </div>
            {language === 'thai' && (
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{content[language].thaiNameLabel}</label>
                <input
                  type="text"
                  value={thaiName}
                  onChange={(e) => setThaiName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
                  placeholder="โจ้, แมรี่, อเล็กซ์..."
                />
              </div>
            )}
            <button
              onClick={handleNameSubmit}
              disabled={!englishName.trim()}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {content[language].startQuiz} 🚀
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Quiz Questions
  if (currentStep === 2) {
    const question = content[language].questions[currentQuestion];
    const progress = ((currentQuestion + 1) / content[language].questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{content[language].quizTitle}</h2>
              <span className="text-lg font-semibold text-purple-600">{currentQuestion + 1}/9</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-600">{content[language].quizSubtitle}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">{question.q}</h3>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-200 transform hover:scale-102 ${
                    answers[currentQuestion] === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <span className="font-medium">{String.fromCharCode(65 + index)}) </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-2xl font-semibold hover:bg-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {content[language].previous}
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={answers[currentQuestion] === undefined}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {currentQuestion === content[language].questions.length - 1 ? content[language].finish : content[language].next}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Results
  if (currentStep === 3) {
    const highestCategory = getHighestScoringCategory();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <Trophy className="mx-auto text-6xl text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{content[language].yourResult}</h2>
            <p className="text-xl text-gray-600">
              {language === 'thai' && thaiName ? `สวัสดี ${thaiName}!` : `Hello ${englishName}!`}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{content[language].dominantTrait}</h3>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl text-center">
              <h4 className="text-2xl font-bold">{getCategoryName(highestCategory)}</h4>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{content[language].scoreBreakdown}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-blue-100 p-4 rounded-2xl">
                <span className="font-semibold flex items-center gap-2">
                  <Brain className="text-blue-500" size={20} />
                  {content[language].selfConfidence}
                </span>
                <span className="text-xl font-bold text-blue-600">{scores.selfConfidence}</span>
              </div>
              <div className="flex items-center justify-between bg-green-100 p-4 rounded-2xl">
                <span className="font-semibold flex items-center gap-2">
                  <Users className="text-green-500" size={20} />
                  {content[language].connectivity}
                </span>
                <span className="text-xl font-bold text-green-600">{scores.connectivity}</span>
              </div>
              <div className="flex items-center justify-between bg-orange-100 p-4 rounded-2xl">
                <span className="font-semibold flex items-center gap-2">
                  <Zap className="text-orange-500" size={20} />
                  {content[language].problemSolver}
                </span>
                <span className="text-xl font-bold text-orange-600">{scores.problemSolver}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentStep(4)}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            {content[language].next} ✨
          </button>
        </div>
      </div>
    );
  }

  // Step 4: Future Persona & Adjective Selection
  if (currentStep === 4) {
    const highestCategory = getHighestScoringCategory();
    const availableAdjectives = language === 'thai' 
      ? adjectives[highestCategory].thai 
      : adjectives[highestCategory].english;

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <Star className="mx-auto text-6xl text-yellow-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Create Your Future ENTANEER! 🌟</h2>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-4">{content[language].futurePersonaPrompt}</label>
            <textarea
              value={futurePersona}
              onChange={(e) => setFuturePersona(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg h-32 resize-none"
              placeholder={content[language].futurePersonaPlaceholder}
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-4">{content[language].selectAdjective}</label>
            <div className="grid grid-cols-2 gap-3">
              {language === 'thai' 
                ? availableAdjectives.map((adj, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAdjective(adj.english)}
                      className={`p-3 rounded-2xl text-center transition-all duration-200 ${
                        selectedAdjective === adj.english
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      <div className="font-semibold">{adj.thai}</div>
                      <div className="text-sm opacity-75">({adj.english})</div>
                    </button>
                  ))
                : availableAdjectives.map((adj, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAdjective(adj)}
                      className={`p-3 rounded-2xl text-center transition-all duration-200 font-semibold ${
                        selectedAdjective === adj
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {adj}
                    </button>
                  ))
              }
            </div>
          </div>

          <button
            onClick={handleCreatePersona}
            disabled={!selectedAdjective || !futurePersona.trim()}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-teal-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {content[language].createPersona} 🎯
          </button>
        </div>
      </div>
    );
  }

  // Step 5: Final Persona & Inspiration
  if (currentStep === 5) {
    const personaName = `The ${selectedAdjective} ${englishName}`;
    const inspirationMessage = getInspirationMessage();

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <div className="mb-8">
            <Sparkles className="mx-auto text-6xl text-purple-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{content[language].yourPersona}</h2>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">{personaName}</h3>
            </div>
          </div>

          <div className="mb-8 text-left">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">{content[language].inspiration}</h4>
            <div className="bg-yellow-100 p-6 rounded-2xl border-l-4 border-yellow-500">
              <p className="text-lg text-gray-800 font-medium">{inspirationMessage}</p>
            </div>
          </div>

          <div className="mb-8 text-left">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Your Future Vision:</h4>
            <div className="bg-blue-100 p-6 rounded-2xl border-l-4 border-blue-500">
              <p className="text-lg text-gray-800">{futurePersona}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-2xl border border-green-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">🎓 Welcome Message</h4>
            <p className="text-gray-800 whitespace-pre-line">{content[language].welcomeMessage}</p>
          </div>

          <div className="mt-8 text-gray-600">
            <p className="text-sm">
              {language === 'thai' 
                ? '🌟 ขอให้โชคดีกับการเดินทางสู่ความเป็น ENTANEER ที่ยิ่งใหญ่!'
                : '🌟 Good luck on your journey to becoming a great ENTANEER!'
              }
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

ReactDOM.render(React.createElement(EntaneerQuizApp), document.getElementById('root'));
