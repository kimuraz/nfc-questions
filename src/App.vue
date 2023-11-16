<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { Question  } from '../constants/questions';
import FullQuestionnaire from './components/FullQuestionnaire.vue';
import FullQuestionnaireChart from './components/FullQuestionnaireChart.vue';
import { Ref } from 'vue';

const { t } = useI18n();
const questionnaireType = ref('FULL');
const fullQuestionnaire: Ref<Question[]|null> = ref(null);


const toggleResults = ref(false);
const showFullResults = (questionnaire: Question[]) => {
  fullQuestionnaire.value = questionnaire;
  toggleResults.value = true;
};

const fullQuestionnaireScore = computed(() => {
  return fullQuestionnaire.value?.reduce((acc: number, curr: Question) => acc + curr.score, 0) || 0;
});
</script>

<template>
  <div id="app">
    <header class="header">
      <h1>{{ t('title') }}</h1>
    </header>

    <main class="content">
      <FullQuestionnaire 
        v-show="!toggleResults && questionnaireType === 'FULL'"
        @fullQuestionnaire="showFullResults"
      />

      <section class="questionnaire-section" v-if="toggleResults">
        <h2>{{ t('results') }}</h2>
        <br/>
        <p>{{ t('score') }}: {{ fullQuestionnaireScore }}</p>

        <p v-if="questionnaireType === 'FULL' && !!fullQuestionnaire">
          <FullQuestionnaireChart :questionnaire="fullQuestionnaire" />
        </p>

        <el-button type="primary" size="large" @click="toggleResults = false">{{ t('back') }}</el-button>
      </section>
     
    </main>
    </div>
</template>

<style lang="scss">
* {
  font-family: 'Roboto', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

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
