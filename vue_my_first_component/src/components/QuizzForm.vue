<template>
  <div>
    <h1 v-if="testDone">{{ changeScore }} / 10</h1>
    <div v-else v-for="(question, index) in questions" :key="index" class="question">
      <div v-if="index === 0 || questions[index - 1].hasBeenAnwsered != false">
        <p>{{ question.text }}</p>
        <div class="buttons">
          <button @click="answerQuestion(index, true)">Vrai</button>
          <button @click="answerQuestion(index, false)">Faux</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { text: 'La Terre est plate.', answer: true, score: 0, hasBeenAnwsered: false },
        {
          text: 'Le soleil tourne autour de la Terre.',
          answer: false,
          score: 0,
          hasBeenAnwsered: false
        },
        {
          text: 'Les humains peuvent voler sans aide.',
          answer: true,
          score: 0,
          hasBeenAnwsered: false
        },
        { text: 'Leau bout à 50 degrés Celsius.', answer: false, score: 0, hasBeenAnwsered: false },
        { text: 'La lune est faite de fromage.', answer: false, score: 0, hasBeenAnwsered: false }
      ],
      answers: [],
      scoreExercice: 0,
      testDone: false
    }
  },
  methods: {
    answerQuestion(index, answer) {
      if (this.questions[index].answer === answer) {
        this.questions[index].score = 2
      } else {
        this.questions[index].score = 0
      }
      this.questions[index].hasBeenAnwsered = true
      this.checkTestDone()
    },
    checkTestDone() {
      this.testDone = this.questions.every((question) => question.hasBeenAnwsered)
    }
  },
  computed: {
    changeScore() {
      let score = 0
      this.questions.forEach((element) => {
        score += element.score
      })
      return score
    }
  }
}
</script>

<style scoped>
.question {
  margin-bottom: 20px;
}

.buttons button {
  margin-right: 10px;
}
</style>
