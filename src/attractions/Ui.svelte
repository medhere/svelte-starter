<script>
import { sleep } from './../sleep.js';
import { TextField, Autocomplete, Button, Badge, CheckboxGroup, DatePicker, Slider, StarRating} from "attractions";

async function* getOptions(text) {
    await sleep(1000)
    yield [
      { name: text, details: 'Optional' },
      { name: `it highlights the match: ${text}` },
    ];
}

const users = [
    { value: 'mike', label: 'Mike' },
    { value: 'john', label: 'John' },
    { value: 'mike2', label: 'Mike2' },
    { value: 'john2', label: 'John2' },
  ];

var hidden;
</script>

<Autocomplete {getOptions} />

<Button round on:click={() => hidden = !hidden}>
    Test <Badge {hidden}>X</Badge>
</Button>
<br>
<TextField outline label="Username" withItem/>
<br>

<CheckboxGroup items={users} name="users[]" max={2} class="colored"/>
<br>

<DatePicker format="%m/%d/%Y" closeOnSelection />
<DatePicker format="%m/%d" />
<DatePicker range top />
<br>
<br>

<Slider
  value={[2, 4]}
  min={1}
  max={10}
  step={0.2}
  rangeBehavior='free'
  tooltips="never"
  ticks={{mode: 'values', values: [1, 3, 5, 7, 9]}}
/>
<br>

<StarRating name="restaurant" value={3} />

