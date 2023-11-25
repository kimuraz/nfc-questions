<script setup lang="ts">
import { ref, defineEmits, Ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { ShortQuestion } from '../constants/questions';
import QuestionnaireForm from './QuestionnaireForm.vue';

const { tm, locale } = useI18n();
const shortQuestionnaire: Ref<ShortQuestion[]> = ref((tm('short') as string[]).map((questionStr: string) => ({
    text: questionStr,
    score: 0,
})));
const emit = defineEmits(['shortQuestionnaire']);

// This is a pitfall of using tm to generate the questionnaire.
watch(locale, () => {
  shortQuestionnaire.value = (tm('short') as string[]).map((questionStr: string, index: number) => ({
    text: questionStr,
    score: shortQuestionnaire.value[index]?.score || 0,
  }));
});

const submit = (data: ShortQuestion[]) => {
  emit('shortQuestionnaire', data);
}
</script>

<template>
  <div>
    <QuestionnaireForm :questionnaire="shortQuestionnaire" @filledQuestionnaire="submit" />
  </div>
</template>
