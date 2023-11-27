<script setup lang="ts">
import { Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { QuestionnaireItem } from '../constants/questions';
import { toRef } from 'vue';

interface Props {
  questionnaire: QuestionnaireItem[];
}

const { t, tm } = useI18n();

const props = defineProps<Props>();

const localQuestionnaire: Ref<Props['questionnaire']> = toRef(props, 'questionnaire');

const emit = defineEmits(['filledQuestionnaire']);

const submit = () => {
  emit('filledQuestionnaire', props.questionnaire);
}

const getLabel = (idx: number, text: string) => {
  if (t(text).endsWith('R')) {
    const label = Object.values(tm('answersLabels')).length - idx;
    return label;
  }
  return idx + 1;
}
</script>

<template>
    <el-card v-for="(q, idx) in localQuestionnaire" class="questionnaire-section">
      <p>{{ idx + 1 }} - {{ t(q.text) }}</p>
      <br/>      <div class="radio-group-labels">
        <el-radio-group v-model="q.score">
          <el-radio
            v-for="(lb, idxAnswers) in tm('answersLabels')" 
            :label="getLabel(idxAnswers, q.text)"
            size="large"
          >
            {{ lb }}
          </el-radio>
        </el-radio-group>
      </div>
    </el-card>
    <section class="questionnaire-button-holder">
      <el-button type="primary" size="large" @click="submit">{{ t('submit') }}</el-button>
    </section>
</template>

<style lang="scss">
.questionnaire-section {
  display: flex;
  justify-content: start;
  height: 100%;
  margin-bottom: 20px;
  > p {
    margin-bottom: 0;
  }
}

.questionnaire-button-holder {
  width: 100%;
  margin: 40px 0;
  > button {
    width: 100%;
  }
}

.radio-group-labels {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

@media screen and (min-width: 1280px) {
  .radio-group-labels {
    flex-direction: row;
  }
}
</style>
