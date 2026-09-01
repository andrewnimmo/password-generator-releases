goog.provide('pwgen.entropy');
/**
 * Base-2 logarithm.
 */
pwgen.entropy.log2 = (function pwgen$entropy$log2(x){
return (Math.log(x) / Math.log((2)));
});
/**
 * Bits contributed by `n` independent draws (with replacement) from a list
 *   of `k` words: n × log2(k).
 */
pwgen.entropy.words_bits = (function pwgen$entropy$words_bits(k,n){
return (n * pwgen.entropy.log2(k));
});
/**
 * Bits contributed by a fixed-width block of `d` uniform decimal digits:
 *   d × log2(10) ≈ 3.32 per digit.
 */
pwgen.entropy.digits_bits = (function pwgen$entropy$digits_bits(d){
return (d * pwgen.entropy.log2((10)));
});
/**
 * Total bits for a passphrase: word draws plus the optional digit block.
 *   `digit-count` may be nil.
 */
pwgen.entropy.passphrase_bits = (function pwgen$entropy$passphrase_bits(k,n,digit_count){
return (pwgen.entropy.words_bits(k,n) + (cljs.core.truth_(digit_count)?pwgen.entropy.digits_bits(digit_count):(0)));
});
/**
 * The smallest word count in [requested, max-words] whose total entropy
 *   meets `floor-bits`, or nil when even max-words falls short.
 * 
 *   This implements SPEC §5's rule that generation RAISES the word count
 *   within the policy's bounds to satisfy the floor, and refuses (nil → the
 *   caller errors) when it cannot.
 */
pwgen.entropy.min_words_for_floor = (function pwgen$entropy$min_words_for_floor(k,floor_bits,digit_count,requested,max_words){
var n = requested;
while(true){
if((pwgen.entropy.passphrase_bits(k,n,digit_count) >= floor_bits)){
return n;
} else {
if((n < max_words)){
var G__21841 = (n + (1));
n = G__21841;
continue;
} else {
return null;

}
}
break;
}
});

//# sourceMappingURL=pwgen.entropy.js.map
