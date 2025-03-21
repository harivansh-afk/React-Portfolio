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

  // Check if the device is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

    // Watch for resize events to detect mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
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
          lineWidth: isMobile ? 0.5 : 1
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          circular: true,
          lineWidth: isMobile ? 0.5 : 1
        },
        pointLabels: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
          font: {
            size: isMobile ? 10 : 16,
            family: 'Raleway',
            weight: '600'
          },
          // Improve label display on mobile
          callback: function(value) {
            if (isMobile) {
              // Create mobile-friendly abbreviations
              switch(value) {
                case "Full-Stack Development":
                  return "Full-Stack";
                case "Frontend (React/Next.js)":
                  return "Frontend";
                case "Backend (Node.js)":
                  return "Backend";
                case "AI & Machine Learning":
                  return "AI & ML";
                case "Database & API Design":
                  return "Database";
                case "DevOps & Deployment":
                  return "DevOps";
                default:
                  return value;
              }
            }
            return value;
          },
          // Ensure labels don't get cut off
          padding: isMobile ? 8 : 4,
        },
        ticks: {
          backdropColor: 'transparent',
          color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
          showLabelBackdrop: false,
          beginAtZero: true,
          max: 100,
          stepSize: isMobile ? 25 : 20,
          font: {
            size: isMobile ? 8 : 12
          },
          // Display fewer ticks on mobile
          count: isMobile ? 4 : 6,
          // Make sure the scale starts at 50
          min: 50
        },
      },
    },
    plugins: {
      legend: {
        display: !isMobile, // Hide legend on mobile to save space
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
        padding: isMobile ? 8 : 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: (items) => items[0].label,
          label: (context) => `Proficiency: ${context.raw}%`,
        },
        // Ensure tooltip doesn't go off-screen on mobile
        position: 'nearest',
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
