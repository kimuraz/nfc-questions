<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { ref, computed, defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
import { Question } from '../constants/questions';
import { CHART_COLORS } from '../constants/colors';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface Props {
  questionnaire: Question[];
}

const props = defineProps<Props>();

const { t, tm } = useI18n();
const fullQuestionnaire = ref(props.questionnaire);

const chartData = computed(() => {
  const labels = Object.values(tm('types'));
  const datasets = Object.keys(tm('types')).map((type: string, idx: number) => {
    return {
      label: tm(`types.${type}`),
      backgroundColor: CHART_COLORS[idx],
      data: labels.map((label: string) => {
        if (label !== tm(`types.${type}`)) {
          return 0;
        }
        return fullQuestionnaire.value?.reduce((acc: number, curr: Question) => {
          if (curr.type === type) {
            return acc + curr.score;
          }
          return acc;
        }, 0) || 0;
      }),
    };
  });
  return {
    labels,
    datasets,
  };
});
</script>

<template>
  <div>
    <h3>{{ t('resultsByQuestionType') }}</h3>

    <Bar
      :data="chartData"
    />
  </div>
</template>
