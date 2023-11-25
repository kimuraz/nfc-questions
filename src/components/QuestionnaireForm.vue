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
    <section class="questionnaire-section">
      <el-button type="primary" size="large" @click="submit">{{ t('submit') }}</el-button>
    </section>
</template>
