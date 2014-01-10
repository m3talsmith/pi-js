var calculateNilakanthaPi = function(iterations) {
  console.log('Calculating Nilakantha series for ' + iterations + ' iterations');
  calculateNilakantha(1, 0, [], iterations, function(pi){
    console.log('Nilakantha series: Pi = ' + pi + ' after ' + iterations + ' iterations');
  });
  return 0;
};

var calculateNilakantha = function(current, iteration, sequences, iterations, callback) {
  if(iteration === iterations) {
    calculateNilakanthaSet(sequences, callback, true, 3);
    return 0;
  }

  var a = current,
      b = current + 1,
      c = current + 2,
      s = sequences;
      s.push(4/(a*b*c));

  calculateNilakantha(c, iteration + 1, s, iterations, callback);
};

var calculateNilakanthaSet = function(sequences, callback, positive, total) {
  if(sequences.length === 0) {
    callback(total);
    return total;
  }

  var n = sequences.shift(),
      s = sequences,
      p, t;

  if(positive) {
    t = total + n;
    p = false;
  } else {
    t = total - n;
    p = true;
  }

  calculateNilakanthaSet(s, callback, p, t);
};

calculateNilakanthaPi(20);
calculateNilakanthaPi(60);
