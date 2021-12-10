<script>

export var count=1;
$: doubled = count * 2;

export var input1;

var arrays=[1,2,3,4,5];
var arrays1=[
  {id:1,val:'a'},
  {id:2,val:'b'},
  {id:3,val:'c'}
];


</script>

<input type="text" bind:value={count} bind:this={input1}>
{doubled}
