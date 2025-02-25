<script lang="ts">
  import { allData } from '../data/ScheduleData';
  import type { Schedule } from '../index';
  import AllMatsLink from './AllMatsLink.svelte';
  import ScheduleBlock from './ScheduleBlock.svelte';

  const data: Schedule = allData;
</script>

<ul class="collapsible">
  {#each data as module}
    <li>
      <div class="collapsible-header title" data-state="closed">
        <span>{module.title}</span>
      </div>
      <div class="collapsible-body">
        {#each module.activities as activity}
          <ScheduleBlock
            name={activity.name}
            duration={activity.duration}
            actType={activity.actType}
            links={activity.links}
          />
        {/each}
      </div>
    </li>
  {/each}
  <li class="all-links">
    <div class="collapsible-header">
      <div class="title">All Materials</div>
    </div>
    <div class="collapsible-body">
      <ul class="collection">
        {#each data as day}
          {#each day.activities as activity}
            {#if activity.links.length > 0}
              <AllMatsLink
                classes={`module-links`}
                actname={activity.name}
                links={activity.links}
              />
            {/if}
          {/each}
        {/each}
      </ul>
    </div>
  </li>
</ul>
