<script setup lang="ts">
import { defineEmits, defineProps, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Question, ShortQuestion  } from '../constants/questions';
import { toRef } from 'vue';

interface Props {
  questionnaire: Question[] | ShortQuestion[];
}

const { t, tm } = useI18n();

const props = defineProps<Props>();

const localQuestionnaire: Ref<Props['questionnaire']> = toRef(props, 'questionnaire');

const emit = defineEmits(['filledQuestionnaire']);

const submit = () => {
  emit('filledQuestionnaire', props.questionnaire);
}
</script>

<template>
    <el-card v-for="(q, idx) in localQuestionnaire" class="questionnaire-section">
      <p>{{ idx + 1 }} - {{ t(q.text) }}</p>
      <br/>
      <el-radio-group v-model="q.score">
        <el-radio v-for="(lb, idx) in tm('answersLabels')"  :label="idx + 1" size="large">{{ lb }}</el-radio>
      </el-radio-group>
    </el-card>
    <section class="questionnaire-button-holder">
      <el-button type="primary" size="large" @click="submit">{{ t('submit') }}</el-button>
    </section>
</template>

<style>
.questionnaire-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
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

@media screen and (min-width: 1280px) {
  .questionnaire-section {
    flex-direction: row;
  }
}
</style>
