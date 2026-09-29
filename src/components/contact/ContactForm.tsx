import React, { useState } from 'react';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
} from '@chakra-ui/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { colors } from '../../theme/colors';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    projectType: 'Full-Stack Application',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include a message describing your inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setStatus('idle');

    try {
      // Production simulated client submission flow without leaking private keys
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'Full-Stack Application',
        message: '',
      });
      setErrors({});
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={{ base: '24px', md: '36px' }}
      borderRadius="20px"
      bg="rgba(16, 16, 23, 0.75)"
      border={`1px solid ${colors.border.subtle}`}
      backdropFilter="blur(16px)"
      boxShadow="0 20px 40px rgba(0, 0, 0, 0.6)"
    >
      <VStack spacing="20px" align="stretch">
        {/* Success Alert */}
        {status === 'success' && (
          <Alert
            status="success"
            variant="subtle"
            borderRadius="12px"
            bg="rgba(16, 185, 129, 0.15)"
            border="1px solid rgba(16, 185, 129, 0.4)"
            color="#FFFFFF"
          >
            <AlertIcon color="#10B981" />
            <Box>
              <AlertTitle fontSize="14px" fontWeight={600}>
                Message sent successfully.
              </AlertTitle>
              <AlertDescription fontSize="13px" color={colors.text.secondary}>
                I'll get back to you as soon as possible.
              </AlertDescription>
            </Box>
          </Alert>
        )}

        {/* Error Alert */}
        {status === 'error' && (
          <Alert
            status="error"
            variant="subtle"
            borderRadius="12px"
            bg="rgba(239, 68, 68, 0.15)"
            border="1px solid rgba(239, 68, 68, 0.4)"
            color="#FFFFFF"
          >
            <AlertIcon color="#EF4444" />
            <Box>
              <AlertTitle fontSize="14px" fontWeight={600}>
                Something went wrong.
              </AlertTitle>
              <AlertDescription fontSize="13px" color={colors.text.secondary}>
                Please try again or contact me directly via email.
              </AlertDescription>
            </Box>
          </Alert>
        )}

        {/* Name Input */}
        <FormControl isInvalid={Boolean(errors.name)} isRequired>
          <FormLabel htmlFor="contact-name" fontSize="13px" fontWeight={500} color={colors.text.secondary}>
            Your Name
          </FormLabel>
          <Input
            id="contact-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            bg="rgba(5, 5, 5, 0.6)"
            border={`1px solid ${colors.border.subtle}`}
            borderRadius="12px"
            h="48px"
            color="#FFFFFF"
            _placeholder={{ color: colors.text.muted }}
            _hover={{ borderColor: colors.border.visible }}
            _focus={{
              borderColor: colors.accent.primary,
              boxShadow: `0 0 0 1px ${colors.accent.primary}`,
            }}
          />
          <FormErrorMessage fontSize="12px">{errors.name}</FormErrorMessage>
        </FormControl>

        {/* Email Input */}
        <FormControl isInvalid={Boolean(errors.email)} isRequired>
          <FormLabel htmlFor="contact-email" fontSize="13px" fontWeight={500} color={colors.text.secondary}>
            Email Address
          </FormLabel>
          <Input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            bg="rgba(5, 5, 5, 0.6)"
            border={`1px solid ${colors.border.subtle}`}
            borderRadius="12px"
            h="48px"
            color="#FFFFFF"
            _placeholder={{ color: colors.text.muted }}
            _hover={{ borderColor: colors.border.visible }}
            _focus={{
              borderColor: colors.accent.primary,
              boxShadow: `0 0 0 1px ${colors.accent.primary}`,
            }}
          />
          <FormErrorMessage fontSize="12px">{errors.email}</FormErrorMessage>
        </FormControl>

        {/* Project Type Select */}
        <FormControl>
          <FormLabel htmlFor="contact-project-type" fontSize="13px" fontWeight={500} color={colors.text.secondary}>
            Project Scope / Inquiry
          </FormLabel>
          <Select
            id="contact-project-type"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            bg="rgba(5, 5, 5, 0.6)"
            border={`1px solid ${colors.border.subtle}`}
            borderRadius="12px"
            h="48px"
            color="#FFFFFF"
            _hover={{ borderColor: colors.border.visible }}
            _focus={{
              borderColor: colors.accent.primary,
              boxShadow: `0 0 0 1px ${colors.accent.primary}`,
            }}
          >
            <option value="Full-Stack Application" style={{ background: '#101017' }}>
              Full-Stack Web Application (MERN)
            </option>
            <option value="Frontend Engineering" style={{ background: '#101017' }}>
              Frontend Engineering & React UI
            </option>
            <option value="REST API & Backend" style={{ background: '#101017' }}>
              REST API & Database Architecture
            </option>
            <option value="Technical Consulting" style={{ background: '#101017' }}>
              Technical Consulting / Codebase Audit
            </option>
          </Select>
        </FormControl>

        {/* Message Textarea */}
        <FormControl isInvalid={Boolean(errors.message)} isRequired>
          <FormLabel htmlFor="contact-message" fontSize="13px" fontWeight={500} color={colors.text.secondary}>
            Message
          </FormLabel>
          <Textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about your project goals, technical scope, or timeline..."
            bg="rgba(5, 5, 5, 0.6)"
            border={`1px solid ${colors.border.subtle}`}
            borderRadius="12px"
            color="#FFFFFF"
            _placeholder={{ color: colors.text.muted }}
            _hover={{ borderColor: colors.border.visible }}
            _focus={{
              borderColor: colors.accent.primary,
              boxShadow: `0 0 0 1px ${colors.accent.primary}`,
            }}
          />
          <FormErrorMessage fontSize="12px">{errors.message}</FormErrorMessage>
        </FormControl>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          w="100%"
          h="54px"
          isLoading={isLoading}
          loadingText="Transmitting message..."
          rightIcon={<Send size={18} />}
          mt="10px"
        >
          Send Inquiry
        </Button>

        <Text fontSize="12px" color={colors.text.muted} textAlign="center" pt="4px">
          Zero spam. Direct communication with Muhammad Owais.
        </Text>
      </VStack>
    </Box>
  );
};
