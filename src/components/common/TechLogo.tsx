import React from 'react';
import { Box } from '@chakra-ui/react';

export type TechLogoName =
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'react'
  | 'nodejs'
  | 'express'
  | 'mongodb'
  | 'typescript'
  | 'python'
  | 'mysql'
  | 'git'
  | 'mern';

interface TechLogoProps {
  name: string;
  size?: number;
  animate?: boolean;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, size = 28, animate = true }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'html5':
    case 'html':
      return (
        <Box
          as="svg"
          viewBox="0 0 512 512"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.15) rotate(3deg)' }}
        >
          <path fill="#E34F26" d="M71 460L30 0h452l-41 460-226 52z" />
          <path fill="#EF652A" d="M256 472l185-42 35-392H256v434z" />
          <path fill="#ECECEC" d="M256 176h-84l-6-67h90V53H102l18 201h136v-78zm0 164l-75-20-5-56h-56l9 110 127 35v-69z" />
          <path fill="#FFFFFF" d="M256 176v78h78l-7 84-71 20v69l127-35 18-216H256zm0-123v56h148l6-56H256z" />
        </Box>
      );

    case 'css3':
    case 'css':
      return (
        <Box
          as="svg"
          viewBox="0 0 512 512"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.15) rotate(-3deg)' }}
        >
          <path fill="#1572B6" d="M71 460L30 0h452l-41 460-226 52z" />
          <path fill="#33A9DC" d="M256 472l185-42 35-392H256v434z" />
          <path fill="#ECECEC" d="M256 176h-84l-6-67h90V53H102l18 201h136v-78zm0 164l-75-20-5-56h-56l9 110 127 35v-69z" />
          <path fill="#FFFFFF" d="M256 176v78h78l-7 84-71 20v69l127-35 18-216H256zm0-123v56h148l6-56H256z" />
        </Box>
      );

    case 'javascript':
    case 'js':
      return (
        <Box
          as="svg"
          viewBox="0 0 100 100"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          borderRadius="6px"
          overflow="hidden"
          boxShadow="0 2px 8px rgba(247, 223, 30, 0.3)"
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.15) translateY(-2px)' }}
        >
          <rect width="100" height="100" fill="#F7DF1E" />
          <path
            fill="#000000"
            d="M28 72c0 6.6-4.2 9.6-9.8 9.6-5.4 0-8.6-2.8-10.4-6.4l7.2-4.4c1 2 2.2 3.6 4 3.6 2 0 3.2-1 3.2-3.8V35h8.8v37zm41.2-1.2c2.2 3.6 5.6 5.8 10.2 5.8 4.2 0 7-2 7-5 0-3.6-3-4.8-8-7-7-3-11.4-6.6-11.4-13.6 0-7.4 6-12.8 15-12.8 6.4 0 11 2.6 13.8 7.4l-7 4.2c-1.4-2.4-3.4-3.8-6.6-3.8-3.4 0-5.4 2-5.4 4.4 0 3 2.6 4.4 7.4 6.4 7.6 3.2 12 6.8 12 14.2 0 8.2-6.6 13.6-16.6 13.6-8.4 0-14-4-16.6-9.6l7.6-4z"
          />
        </Box>
      );

    case 'react':
      return (
        <Box
          as="svg"
          viewBox="-11.5 -10.23174 23 20.46348"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          style={{
            animation: animate ? 'orbitSpin 12s linear infinite' : 'none',
          }}
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </Box>
      );

    case 'nodejs':
    case 'node':
      return (
        <Box
          as="svg"
          viewBox="0 0 100 100"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.15) translateY(-2px)' }}
        >
          <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" fill="#339933" />
          <path
            fill="#FFFFFF"
            d="M38 68c0 4.2-2.8 6.4-6.4 6.4-3.6 0-5.8-1.8-7-4.4l4.8-2.8c.6 1.4 1.4 2.4 2.6 2.4 1.4 0 2.2-.6 2.2-2.4V42h5.8v26zm27-.8c1.4 2.4 3.8 3.8 6.8 3.8 2.8 0 4.6-1.4 4.6-3.4 0-2.4-2-3.2-5.4-4.6-4.6-2-7.6-4.4-7.6-9 0-5 4-8.6 10-8.6 4.2 0 7.4 1.8 9.2 5l-4.6 2.8c-1-1.6-2.2-2.6-4.4-2.6-2.2 0-3.6 1.4-3.6 3 0 2 1.8 3 5 4.2 5 2.2 8 4.6 8 9.4 0 5.6-4.4 9.2-11 9.2-5.6 0-9.4-2.6-11.2-6.4l5.2-2.6z"
          />
        </Box>
      );

    case 'express':
      return (
        <Box
          as="svg"
          viewBox="0 0 100 100"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.15) rotate(5deg)' }}
        >
          <circle cx="50" cy="50" r="46" fill="#FFFFFF" />
          <text
            x="50"
            y="62"
            fontFamily="'Poppins', sans-serif"
            fontWeight="700"
            fontSize="36"
            fill="#050505"
            textAnchor="middle"
            letterSpacing="-1px"
          >
            ex
          </text>
        </Box>
      );

    case 'mongodb':
    case 'mongo':
      return (
        <Box
          as="svg"
          viewBox="0 0 100 100"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.18) translateY(-2px)' }}
        >
          <circle cx="50" cy="50" r="46" fill="#FFFFFF" />
          <path
            fill="#13AA52"
            d="M50 16c-1 1-18 18-18 36 0 14 8 26 18 32 10-6 18-18 18-32 0-18-17-35-18-36z"
          />
          <path fill="#116149" d="M50 16v68c10-6 18-18 18-32 0-18-17-35-18-36z" />
          <path fill="#FFFFFF" d="M50 84v-20c-.5 0-1-.5-1-1s.5-1 1-1v-4c-1 0-2-1-2-2s1-2 2-2v-4c-2 0-3-1.5-3-3s1-3 3-3v-4c-3 0-4-2-4-4s1-4 4-4v-27z" opacity="0.4" />
        </Box>
      );

    case 'typescript':
    case 'ts':
      return (
        <Box
          as="svg"
          viewBox="0 0 100 100"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          borderRadius="6px"
          overflow="hidden"
          boxShadow="0 2px 8px rgba(49, 120, 198, 0.4)"
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.15) translateY(-2px)' }}
        >
          <rect width="100" height="100" fill="#3178C6" />
          <path
            fill="#FFFFFF"
            d="M20 38h24v7h-8v33h-8V45h-8v-7zm30 25c1.8 3.2 4.8 5 8.6 5 3.6 0 6-1.8 6-4.4 0-3-2.6-4.2-7-6-6-2.6-10-5.8-10-12 0-6.4 5.2-11.2 13-11.2 5.6 0 9.6 2.2 12 6.4l-6 3.6c-1.2-2-3-3.2-5.8-3.2-3 0-4.8 1.6-4.8 3.8 0 2.6 2.2 3.8 6.4 5.6 6.6 2.8 10.4 6 10.4 12.4 0 7.2-5.8 12-14.4 12-7.2 0-12-3.4-14.4-8.2l6-3.8z"
          />
        </Box>
      );

    case 'python':
      return (
        <Box
          as="svg"
          viewBox="0 0 110 110"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.15) rotate(5deg)' }}
        >
          <path
            fill="#3776AB"
            d="M54.5 9c-12 0-21 4.5-21 13.5v9h22v3H24.5C14 34.5 5 44 5 54.5s8.5 20 19 20h6.5v-10c0-10.5 8.5-19 19-19h21.5v-3c0-9-9.5-13.5-21-13.5h4.5zm-8 7a3 3 0 110 6 3 3 0 010-6z"
          />
          <path
            fill="#FFD438"
            d="M55.5 101c12 0 21-4.5 21-13.5v-9h-22v-3h31c10.5 0 19.5-9.5 19.5-20s-8.5-20-19-20h-6.5v10c0 10.5-8.5 19-19 19H44v3c0 9 9.5 13.5 21 13.5h-4.5zm8-7a3 3 0 110-6 3 3 0 010 6z"
          />
        </Box>
      );

    case 'mysql':
    case 'sql':
      return (
        <Box
          as="svg"
          viewBox="0 0 100 100"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.15)' }}
        >
          <circle cx="50" cy="50" r="46" fill="#00758F" />
          <path
            fill="#F29111"
            d="M50 20c-15 0-26 12-26 26 0 12 8 22 20 25-1-4-1-8 0-12 3-8 9-14 17-17 1-4-3-12-11-22z"
          />
          <path
            fill="#FFFFFF"
            d="M72 48c0 12-10 22-22 22-5 0-10-2-14-5 5-2 10-6 13-11 3-5 5-10 5-16 11 2 18 6 18 10z"
          />
        </Box>
      );

    case 'git':
      return (
        <Box
          as="svg"
          viewBox="0 0 100 100"
          w={`${size}px`}
          h={`${size}px`}
          flexShrink={0}
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.15) rotate(-5deg)' }}
        >
          <rect width="80" height="80" x="10" y="10" rx="14" fill="#F05032" transform="rotate(45 50 50)" />
          <path
            fill="#FFFFFF"
            d="M62 46.5a6.5 6.5 0 00-4.8 2.2L47 38.5V36a6.5 6.5 0 10-5 0v27a6.5 6.5 0 105.1.1l9.7-9.7a6.5 6.5 0 105.2-6.9zm-17-17a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 41a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm17-21a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
          />
        </Box>
      );

    case 'mern':
    case 'mernstack':
      return (
        <Box
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          w={`${size}px`}
          h={`${size}px`}
          borderRadius="full"
          bg="linear-gradient(135deg, #13AA52 0%, #339933 33%, #61DAFB 66%, #000000 100%)"
          color="#FFFFFF"
          fontWeight="800"
          fontSize={`${Math.round(size * 0.35)}px`}
          fontFamily="'JetBrains Mono', monospace"
          boxShadow="0 0 10px rgba(97, 218, 251, 0.5)"
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.18)' }}
        >
          M
        </Box>
      );

    default:
      return (
        <Box
          w={`${size}px`}
          h={`${size}px`}
          borderRadius="full"
          bg="#8B5CF6"
          boxShadow="0 0 8px #C084FC"
        />
      );
  }
};
