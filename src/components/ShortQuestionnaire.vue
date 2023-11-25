<script setup lang="ts">
import { ref, defineEmits, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { ShortQuestion } from '../constants/questions';
import QuestionnaireForm from './QuestionnaireForm.vue';

const { tm } = useI18n();
const shortQuestionnaire: Ref<ShortQuestion[]> = ref((tm('short') as string[]).map((questionStr: string) => ({
    text: questionStr,
    score: 0,
})));
const emit = defineEmits(['shortQuestionnaire']);

const submit = (data: ShortQuestion[]) => {
  emit('shortQuestionnaire', data);
}
</script>

<template>
  <div>
    <QuestionnaireForm :questionnaire="shortQuestionnaire" @filledQuestionnaire="submit" />
  </div>
</template>
