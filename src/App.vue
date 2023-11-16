<script setup lang="ts">
import { ref, computed } from 'vue';
import { FULL_QUESTIONNAIRE, Question  } from './constants/questions';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const fullQuestionnaire = ref(FULL_QUESTIONNAIRE.map((question: Question) => {
  return {
    ...question,
    score: 0,
  };
}));

const fullQuestionnaireScore = computed(() => {
  return fullQuestionnaire.value.reduce((acc, curr) => acc + curr.score, 0);
});

const toggleResults = ref(false);

const submit = () => {
  toggleResults.value = true;
}
</script>

<template>
  <div id="app">
    <header class="header">
      <h1>{{ t('title') }}</h1>
    </header>

    <main class="content">
      <section v-for="q in fullQuestionnaire" class="questionnaire-section" v-show="!toggleResults">
        <p>{{ t(q.text) }}</p>
        <br/>
        <el-radio-group v-model="q.score">
          <el-radio v-for="(lb, idx) in tm('answersLabels')"  :label="idx + 1" size="large">{{ lb }}</el-radio>
        </el-radio-group>
      </section>

      <section class="questionnaire-section" v-show="toggleResults">
        <p>{{ t('results') }}</p>
        <br/>
        <p>{{ t('score') }}: {{ fullQuestionnaireScore }}</p>

        <el-button type="primary" size="large" @click="toggleResults = false">{{ t('back') }}</el-button>
      </section>
     
      <section class="questionnaire-section" v-show="!toggleResults">
        <el-button type="primary" size="large" @click="submit">{{ t('submit') }}</el-button>
      </section>
    </main>
    </div>
</template>

<style lang="scss">
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
</style>
