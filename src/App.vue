<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Question, ShortQuestion } from './constants/questions';

import FullQuestionnaire from './components/FullQuestionnaire.vue';
import ShortQuestionnaire from './components/ShortQuestionnaire.vue';
import Results from './components/Results.vue';

const { t, locale } = useI18n();
const questionnaireType = ref('FULL');
const questionnaire: Ref<Question[] | ShortQuestion[]> = ref([]);


const toggleResults = ref(false);
const showFullResults = (data: Question[] | ShortQuestion[]) => {
  questionnaire.value = data;
  toggleResults.value = true;
};

</script>

<template>
  <div id="app">
    <header class="header">
      <div style="margin-top: 20px">
        <el-radio-group v-model="locale" size="small">
          <el-radio-button label="en">English</el-radio-button>
          <el-radio-button label="ptBR">Português</el-radio-button>
        </el-radio-group>
      </div>
      <h1>{{ t('title') }}</h1>
    </header>

    <main class="content">
      <section class="intro">
        <p>
          {{ t('about.intro') }}
        </p>
        <br/>

        <el-radio-group v-model="questionnaireType" v-if="!toggleResults">
          <el-radio-button label="FULL">{{ t('questionnaireType.full') }}</el-radio-button>
          <el-radio-button label="SHORT">{{ t('questionnaireType.short') }}</el-radio-button>
        </el-radio-group>
      </section>
      

      <FullQuestionnaire 
        v-show="!toggleResults && questionnaireType === 'FULL'"
        @fullQuestionnaire="showFullResults"
      />

      <ShortQuestionnaire 
        v-show="!toggleResults && questionnaireType === 'SHORT'"
        @shortQuestionnaire="showFullResults"
      />

      <section v-if="toggleResults">
        <Results :questionnaire="questionnaire" :questionnaireType="questionnaireType" @back="toggleResults = false"/>
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
}

.content {
  margin: auto;
  width: 95%;
}

.intro {
  width: 100%;
  text-align: center;
  margin: 2rem 0;
}

@media screen and (min-width: 1024px) {
  .content {
    width: 85%;
  }
}

@media screen and (min-width: 1280px) {
  .content {
    width: 65%;
  }
}
</style>
