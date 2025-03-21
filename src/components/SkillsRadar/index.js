import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import './style.css';

// Register ChartJS components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillsRadar = ({ skills }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  // Set dark mode detection
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.getAttribute('data-theme') !== 'light'
  );

  useEffect(() => {
    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDarkMode(document.documentElement.getAttribute('data-theme') !== 'light');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (skills && skills.length > 0) {
      // Get accent color from CSS vars
      const accentColor = 'rgba(204, 0, 0, 0.7)'; // Using the red accent

      // Format data for the radar chart
      const data = {
        labels: skills.map(skill => skill.name),
        datasets: [
          {
            label: 'Skill Proficiency',
            data: skills.map(skill => skill.value),
            backgroundColor: isDarkMode
              ? 'rgba(204, 0, 0, 0.2)'  // Slight red tint
              : 'rgba(204, 0, 0, 0.1)',
            borderColor: accentColor,
            borderWidth: 2,
            pointBackgroundColor: isDarkMode
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(0, 0, 0, 1)',
            pointBorderColor: accentColor,
            pointHoverBackgroundColor: accentColor,
            pointHoverBorderColor: isDarkMode ? '#fff' : '#000',
          },
        ],
      };

      setChartData(data);
    }
  }, [skills, isDarkMode]);

  // Chart options
  const options = {
    scales: {
      r: {
        angleLines: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
          font: {
            size: 16,
            family: 'Raleway',
            weight: '600'
          },
        },
        ticks: {
          backdropColor: 'transparent',
          color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
          showLabelBackdrop: false,
          beginAtZero: true,
          max: 100,
          stepSize: 20,
          font: {
            size: 12
          }
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: isDarkMode ? '#fff' : '#000',
          font: {
            size: 14,
            family: 'Raleway',
            weight: 'bold'
          },
          boxWidth: 15,
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: isDarkMode ? 'rgba(10, 10, 10, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: isDarkMode ? '#fff' : '#000',
        bodyColor: isDarkMode ? '#fff' : '#000',
        borderColor: 'rgba(204, 0, 0, 0.5)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: (items) => items[0].label,
          label: (context) => `Proficiency: ${context.raw}%`,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="skills-radar-container">
      <div className="skills-radar-chart">
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SkillsRadar;
