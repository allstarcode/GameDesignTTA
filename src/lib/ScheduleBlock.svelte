<script lang="ts">
  type link = {
    displayText: string;
    linkURL: string;
  };

  interface BlockColors {
    top: string;
    footer: string;
  }

  const actTypes: Record<string, BlockColors> = {
    coreskill: {
      top: 'bg-asc-blue',
      footer: 'bg-asc-blue-d',
    },
    misc: {
      top: 'bg-dark',
      footer: 'bg-dark-d',
    },
    lecture: {
      top: 'bg-purple',
      footer: 'bg-purple-d',
    },
    codealong: {
      top: 'bg-red',
      footer: 'bg-red-d',
    },
    project: {
      top: 'bg-yellow',
      footer: 'bg-yellow-d',
    },
    survey: {
      top: 'bg-green',
      footer: 'bg-green-d',
    },
    officehours: {
      top: 'bg-light',
      footer: 'bg-light-d',
    },
    teambuilding: {
      top: 'bg-violet',
      footer: 'bg-violet-d',
    },
  };

  export let name: string;
  export let duration: string;
  export let actType: string;
  export let links: link[];

  const topClass = actTypes[actType]?.top ?? 'NOCLASSFOUND'
  const footerClass = actTypes[actType]?.footer ?? 'NOCLASSFOUND'
</script>

{#if actType === 'lecalonject'}
<div class="row sched-card">
  <div class="col s9 offset-s1">
    <div class={`card sched-item lecalonject-top`}>
      <div class="card-content">
        <div class="card-title">{name}</div>
        <p class="hidden">{duration}</p>
      </div>
      <div class={`card-action lecalonject-footer`}>
        {#each links as link}
          <a target="_blank" rel="noreferrer" href={link.linkURL}>{link.displayText}</a>
        {/each}
      </div>
    </div>
  </div>
</div>
{:else}
<div class="row sched-card">
  <div class="col s9 offset-s1">
    <div class={`card sched-item ${topClass}`}>
      <div class="card-content">
        <div class="card-title">{name}</div>
        <p class="hidden">{duration}</p>
      </div>
      <div class={`card-action ${footerClass}`}>
        {#each links as link}
          <a target="_blank" rel="noreferrer" href={link.linkURL}>{link.displayText}</a>
        {/each}
      </div>
    </div>
  </div>
</div>

{/if}