import { Component } from '@angular/core';

interface PlantTip {
  title: string;
  image: string;
  description: string;
  class: string;
}

@Component({
  selector: 'app-plant-tips',
  standalone: true,
  templateUrl: './plant-tips.component.html',
})
export class PlantTipsComponent {
  pageTitle = '🌿 10 Tips for Happier Houseplants 🪴';

  intro = [
    `While plenty of houseplants are so low-maintenance that even the most hands-off gardener can keep them alive, all plants are happier and healthier with proper care.`,
    `Learn how to calculate the amount of light your plants receive each day, perfect your watering technique, prevent dust and pests from halting your plants' growth, and improve drainage and soil quality with these professional tips.`
  ];

  plantTips: PlantTip[] = [
    {
      title: 'Clean Your Plants Regularly',
      image: '/cleaning-plant.png',
      description: 'Dislodging pests and removing dust improves light absorption. Wrap pots in plastic to avoid soil mess while cleaning.',
      class: 'bg-[#f9f3ef] md:bg-[#f9f3ef] lg:bg-[#f9f3ef]'
    },
    {
      title: 'Improve Drainage—Without Fillers',
      image: '/drainage.jpg',
      description: 'Avoid rocks or bark as fillers. They reduce root space and trap moisture. Use only soil for healthier roots.',
      class: 'bg-[#fffcfb] md:bg-[#fffcfb] lg:bg-[#fffcfb]'
    },
    {
      title: 'Monitor the Roots',
      image: '/roots.jpg',
      description: 'Check roots yearly. If more than 75% of the visible mass is roots, it\'s time to repot. This promotes healthier growth.',
      class: 'bg-[#f9f3ef] md:bg-[#fffcfb] lg:bg-[#f9f3ef]'
    },
    {
      title: 'Combine New Soil With Old',
      image: '/soil.png',
      description: 'Mix new potting mix with the existing one to maintain drainage and avoid shocking your plant.',
      class: 'bg-[#fffcfb] md:bg-[#f9f3ef] lg:bg-[#fffcfb]'
    },
    {
      title: 'Water Dry Soil With Care',
      image: '/dry-watering.jpg',
      description: 'Gradually add water to dry soil or soak the rootball for 20 minutes to restore hydration evenly.',
      class: 'bg-[#f9f3ef] md:bg-[#f9f3ef] lg:bg-[#f9f3ef]'
    },
    {
      title: 'Try Watering From the Bottom',
      image: '/watering.png',
      description: 'Bottom watering encourages deep roots. Let the plant absorb water from a tray for about 15 minutes.',
      class: 'bg-[#fffcfb] md:bg-[#fffcfb] lg:bg-[#fffcfb]'
    },
    {
      title: 'Understand Your Light Exposure',
      image: '/houseplants-light.jpg',
      description: 'Direct light casts sharp shadows; indirect light is filtered. Adjust plant positions based on their needs.',
      class: 'bg-[#f9f3ef] md:bg-[#fffcfb] lg:bg-[#f9f3ef]'
    },
    {
      title: 'Calculate How Much Light They Get',
      image: '/houseplantlight.jpg',
      description: 'Use a light meter app or shadow test. Strong shadows = high light. No shadow = low light. Match plants accordingly.',
      class: 'bg-[#fffcfb] md:bg-[#f9f3ef] lg:bg-[#fffcfb]'
    },
    {
      title: 'Prevent Pests',
      image: '/pests.jpg',
      description: 'Dry out soil, use sticky traps, or Mosquito Bits to fight fungus gnats. Avoid overwatering.',
      class: 'bg-[#f9f3ef] md:bg-[#f9f3ef] lg:bg-[#f9f3ef]'
    },
    {
      title: 'Use Time-Release Fertilizer',
      image: '/fertilizing-plants.jpg',
      description: 'Time-release fertilizer provides steady nutrients without burning roots—ideal for consistent growth.',
      class: 'bg-[#fffcfb] md:bg-[#fffcfb] lg:bg-[#fffcfb]'
    },
    {
      title: 'Make Your Plants Part of the Family',
      image: '/house-plants.jpg',
      description: 'Check them weekly. Early detection of stress or pests can make a big difference in their health.',
      class: 'bg-[#f9f3ef] md:bg-[#fffcfb] lg:bg-[#f9f3ef]'
    }
  ];
}
