<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';
import { FULL_QUESTIONNAIRE, Question  } from '../constants/questions';

const { t, tm } = useI18n();
const fullQuestionnaire = ref(FULL_QUESTIONNAIRE.map((question: Question) => ({
    ...question,
    score: 0,
})));
const emit = defineEmits(['fullQuestionnaire']);

const submit = () => {
  emit('fullQuestionnaire', fullQuestionnaire.value);
}
</script>

<template>
  <div>
    <el-card v-for="(q, idx) in fullQuestionnaire" class="questionnaire-section">
      <p>{{ idx + 1 }} - {{ t(q.text) }}</p>
      <br/>
      <el-radio-group v-model="q.score">
        <el-radio v-for="(lb, idx) in tm('answersLabels')"  :label="idx + 1" size="large">{{ lb }}</el-radio>
      </el-radio-group>
    </el-card>
    <section class="questionnaire-section">
      <el-button type="primary" size="large" @click="submit">{{ t('submit') }}</el-button>
    </section>
  </div>
</template>
