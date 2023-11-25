<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { FULL_QUESTIONNAIRE, Question  } from '../constants/questions';
import QuestionnaireForm from './QuestionnaireForm.vue';

const fullQuestionnaire = ref(FULL_QUESTIONNAIRE.map((question: Question) => ({
    ...question,
    score: 0,
})));
const emit = defineEmits(['fullQuestionnaire']);

const submit = (data: Question[]) => {
  emit('fullQuestionnaire', data);
}
</script>

<template>
  <div>
    <QuestionnaireForm :questionnaire="fullQuestionnaire" @filledQuestionnaire="submit" />
  </div>
</template>
