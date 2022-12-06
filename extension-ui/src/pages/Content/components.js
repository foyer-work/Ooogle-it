import { millisToSecs } from './utils';

export const generateLoadingDiv = () => {
  const createdDiv = document.createElement('div');
  const loadingDivHTML = `<div id="LOADING_DIV" class="card my-3" style="width: 37rem;">
      <div class="card-body">
        <p class="card-text">Loading GPT Powered Results......</p>
      </div>
    </div>`;

  createdDiv.innerHTML = loadingDivHTML;

  return createdDiv;
};

export const generateResultDiv = (message, elapsedTimeInMillis) => {
  const createdDiv = document.createElement('div');
  const resultDivHTML = `<div id="RESULT_DIV" class="card my-3" style="width: 37rem;">
      <div class="card-body">
        <h5 class="card-title fs-6 d-flex flex-column">
          <span class="pr-3 mb-1">ChatGPT Powered Result </span>
          <p class="card-text">
            <small class="text-muted padding-start">
              ${millisToSecs(elapsedTimeInMillis)}s
            </small>
          </p>
        </h5>
        <p class="card-text">${message}</p>
      </div>
    </div>`;

  createdDiv.innerHTML = resultDivHTML;

  return createdDiv;
};
