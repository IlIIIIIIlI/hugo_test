/* 返回随机颜色 */
function randomColor() {
  return (
    "rgb(" +
    ~~(255 * Math.random()) +
    "," +
    ~~(255 * Math.random()) +
    "," +
    ~~(255 * Math.random()) +
    ")"
  );
}

/* 鼠标点击文字特效 */
var a_idx = 0;
var a_click = 1;
var a = new Array(
  "SVM-Support Vector Machine",
  "CNN-Convolutional Neural Network",
  "RNN-Recurrent Neural Network",
  "GAN-Generative Adversarial Network",
  "MLP-Multilayer Perceptron",
  "KNN-K-Nearest Neighbor",
  "DT-Decision Tree",
  "RF-Random Forest",
  "GB-Gradient Boosting",
  "BP-Backpropagation",
  "SGD-Stochastic Gradient Descent",
  "SELU-Scaled Exponential Linear Unit",
  "ReLU-Rectified Linear Unit",
  "LSTM-Long Short-Term Memory",
  "GRU-Gated Recurrent Unit",
  "Adam-Adaptive Moment Estimation",
  "RBM-Restricted Boltzmann Machine",
  "AE-Autoencoder",
  "PCA-Principal Component Analysis",
  "ICA-Independent Component Analysis",
  "NMF-Non-Negative Matrix Factorization",
  "t-SNE-t-Distributed Stochastic Neighbor Embedding",
  "K-means-K-Means Clustering",
  "GMM-Gaussian Mixture Model",
  "EM-Expectation-Maximization",
  "HMM-Hidden Markov Model",
  "DQN-Deep Q-Network",
  "DDPG-Deep Deterministic Policy Gradient",
  "A3C-Asynchronous Advantage Actor-critic",
  "PPO-Proximal Policy Optimization",
  "TRPO-Trust Region Policy Optimization",
  "TD-Temporal Difference",
  "DYNA-Dynamic Neural Network Architecture"
);
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    /* 点击频率，点击几次就换文字 */
    var frequency = 2;
    if (a_click % frequency === 0) {
      var $i = $("<span/>").text(a[a_idx]);
      a_idx = (a_idx + 1) % a.length;
      var x = e.pageX,
        y = e.pageY;
      $i.css({
        "z-index": 9999,
        top: y - 20,
        left: x,
        position: "absolute",
        "font-weight": "bold",
        color: randomColor(),
        "-webkit-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
      });
      $("body").append($i);
      $i.animate(
        {
          top: y - 180,
          opacity: 0,
        },
        1500,
        function () {
          $i.remove();
        }
      );
    }
    a_click++;
  });
});

/* 评论框加载背景图片 */
$(".v[data-class=v] .veditor").attr(
  "style",
  "background-image: url(" +
    $cdnPrefix +
    "/images/common/valinebg.webp) !important;"
);

function getCurrentDateString() {
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  return (
    "" +
    now.getFullYear() +
    (month < 10 ? "0" + month : month) +
    (day < 10 ? "0" + day : day) +
    (hour < 10 ? "0" + hour : hour)
  );
}

/* 站点运行时间 */
function runtime() {
  window.setTimeout("runtime()", 1000);
  /* 请修改这里的起始时间 */
  let startTime = new Date("12/10/2021 21:00:00");
  let endTime = new Date();
  let usedTime = endTime - startTime;
  let days = Math.floor(usedTime / (24 * 3600 * 1000));
  let leavel = usedTime % (24 * 3600 * 1000);
  let hours = Math.floor(leavel / (3600 * 1000));
  let leavel2 = leavel % (3600 * 1000);
  let minutes = Math.floor(leavel2 / (60 * 1000));
  let leavel3 = leavel2 % (60 * 1000);
  let seconds = Math.floor(leavel3 / 1000);
  let runbox = document.getElementById("run-time");
  runbox.innerHTML =
    '本站已运行<i class="far fa-clock fa-fw"></i> ' +
    (days < 10 ? "0" : "") +
    days +
    " 天 " +
    (hours < 10 ? "0" : "") +
    hours +
    " 时 " +
    (minutes < 10 ? "0" : "") +
    minutes +
    " 分 " +
    (seconds < 10 ? "0" : "") +
    seconds +
    " 秒 ";
}
runtime();

/* 轮播背景图片 */
$(function () {
  $.backstretch(
    [
      "/images/background/sba.jpg",
    ],
    { duration: 60000, fade: 1500 }
  );
});

/* 拉姆蕾姆回到顶部或底部按钮 */
$(function() {
	$("#lamu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:$(document).height()},800);
		return false;
	});
	$("#leimu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:0},800);
		return false;
	});
});
