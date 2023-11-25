<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import FullQuestionnaireChart from './FullQuestionnaireChart.vue';

import { Question, ShortQuestion, Questionnaire  } from '../constants/questions';

interface Props {
  questionnaire: Questionnaire;
  questionnaireType: 'FULL' | 'SHORT';
}
const props = defineProps<Props>();

const { t } = useI18n();

const emit = defineEmits(['back']);

const questionnaireScore = computed(() => {
  return props.questionnaire.reduce((acc: number, curr: (Question | ShortQuestion)) => acc + (curr.score || 0), 0) || 0;
});

const percentageScore = computed(() => {
  return ((questionnaireScore.value / (props.questionnaire.length * 6)) * 100).toFixed(0);
});
</script>


<template>
  <section>
   <el-result
        icon="success"
        :title="t('results')"
        :sub-title="t(`resultsText.${props.questionnaireType.toLowerCase()}`, { score: questionnaireScore })"
      >
    </el-result>

    <el-progress :percentage="percentageScore"/>

    <p v-if="props.questionnaireType === 'FULL'">
      <FullQuestionnaireChart :questionnaire="props.questionnaire as Question[]" />
    </p>

    <br/>
    
    <el-button class="back-button" type="" size="large" @click="emit('back')">{{ t('back') }}</el-button>
  </section>
</template>

<style lang="scss" scoped>
  .back-button {
    width: 100%;
  }
</style>
