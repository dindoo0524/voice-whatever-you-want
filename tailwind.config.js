const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      spacing: {
        '4px': '4px',
        '5px': '5px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '15px': '15px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '25px': '25px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '42px': '42px',
        '44px': '44px',
        '48px': '48px',
        '60px': '60px',
      },
      fontSize: {
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '42px': '42px',
        '48px': '48px',
        '60px': '60px',
      },
      colors: {
        white: '#FFFFFF',
        'black-01': '#202020',
        'black-02': '#666666',
        'black-03': '#AAAAAA',
        'black-04': '#C0C0C0',
        'black-05': '#F5F4F7',
        'black-06': '#FBFBFB',
        'black-line': '#E0E0E0',
        'blue-01': '#0066FF',
        'red-01': '#EA5455',
        'orange-01': '#FF6700',
        'green-01': '#1EB071',
        'secondary-red': '#FF2828',
        'secondary-red-s': '#FFBABA',
        'secondary-orange': '#FF6224',
        'secondary-orange-s': '#FFE6D4',
        'secondary-sunset': '#F67155',
        'secondary-sunset-s': '#FFB49F',
        'secondary-magenta': '#B32572',
        'secondary-magenta-s': '#FFD3EB',
        'secondary-pink': '#FA50A1',
        'secondary-pink-s': '#FFF3F3',
        'secondary-garden': '#009877',
        'secondary-garden-s': '#29E67F',
        'secondary-green': '#30BA6F',
        'secondary-green-s': '#BEFD40',
        'secondary-pgreen': '#32711B',
        'secondary-pgreen-s': '#C2FDAF',
        'secondary-brown': '#BC7C44',
        'secondary-brown-s': '#FFD895',
        'secondary-yellow': '#F5CE3E',
        'secondary-yellow-s': '#F9FE70',
        'secondary-navy': '#002E6D',
        'secondary-navy-s': '#A7CCFF',
        'secondary-sky': '#41C4DD',
        'secondary-sky-s': '#99E8E7',
        'secondary-purple': '#7050FA',
        'secondary-purple-s': '#DCB9FF',

        'gray-900': '#1A1A1A',
        'gray-800': '#333333',
        'gray-700': '#4D4D4D',
        'gray-600': '#666666',
        'gray-500': '#808080',
        'gray-400': '#999999',
        'gray-300': '#B3B3B3',
        'gray-200': '#CCCCCC',
        'gray-100': '#E0E0E0',
        'gray-50': '#F0F0F0',
        'gray-25': '#F7F7F7',
      },
    },
    fontFamily: {
      pretendard: ['var(--font-pretendard)'],
    },
  },
  plugins: [
  ],
}

export default config;
