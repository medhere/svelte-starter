<!-- svelte-forms-lib, copy of react formix
-->


<script>
    import { createForm } from "svelte-forms-lib";
    import * as yup from 'yup';
    
    const { form, errors, state, isModified, touched, isValid, modified, isSubmitting, isValidating, handleChange, handleSubmit, handleReset, updateField, updateTouched,  updateValidateField, validateField } = createForm({
      initialValues: {
        title: "",
        name: "",
        email: ""
      },
      validationSchema: yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required()
      }),
      onSubmit: values => {
        console.log(values);
        alert(JSON.stringify(values));
      }
    });

      function getFormAttr(){
        console.log($form, $errors, $state, $isModified, $touched, $isValid, $modified, $isSubmitting, $isValidating,);
      }
  </script>

  <form on:submit={handleSubmit}>
    <label for="title">title</label>
    <select id="title" name="title" on:change={handleChange} bind:value={$form.title}>
      <option></option>
      <option>Mr.</option>
      <option>Mrs.</option>
      <option>Mx.</option>
    </select>

    <label for="name">name</label>
    <input id="name" name="name" on:change={handleChange} bind:value={$form.name}/>
    {#if $errors.name}
      <small>{$errors.name}</small>
    {/if}
    <label for="email">email</label>
    <input id="email" name="email" on:change={handleChange} bind:value={$form.email}/>

    <label for="files">Files</label><input type="file" name="files" id="files" on:change={handleChange}>

    <button type="submit">Submit</button>
  </form>
