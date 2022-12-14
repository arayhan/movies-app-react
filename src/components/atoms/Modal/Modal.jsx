import React from 'react';
import { Button } from '@/components/atoms';
import { BiLoaderAlt } from 'react-icons/bi';

export const Modal = ({ title, description, isSubmitting, submitButtonText, onClose, onSubmit, children }) => {
	return (
		<div className="fixed z-10 left-0 top-0 w-full h-screen flex items-center p-5">
			<div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50" onClick={!isSubmitting && onClose} />
			<div className="relative w-full max-w-screen-sm mx-auto bg-white shadow-md rounded-md">
				<div className="p-5 space-y-2">
					<div className="font-semibold text-xl">{title}</div>
					{description && <div>{description}</div>}
				</div>

				<hr />

				<div className="p-5">{children}</div>

				<hr />

				<div className="p-5 flex items-center justify-between">
					<Button className="px-5 py-2" disabled={isSubmitting} variant="danger" onClick={onClose}>
						Cancel
					</Button>

					<Button
						className="px-5 py-2 flex items-center space-x-2"
						disabled={isSubmitting}
						variant="primary"
						onClick={onSubmit}
						leftIcon={isSubmitting && <BiLoaderAlt className="animate-spin" />}
					>
						<span>{submitButtonText}</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

Modal.defaultProps = {
	onClose: () => {},
	submitButtonText: 'Submit',
};
