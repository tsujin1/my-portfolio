import React from 'react';

interface FooterProps {
    email?: string;
    linkedin?: string;
    name?: string;
}

const Footer: React.FC<FooterProps> = ({
    name = "Justin Rich"
}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col items-center gap-4">

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {currentYear} {name}. All rights reserved.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center justify-center gap-1">
                            Built using React + Tailwind CSS
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;